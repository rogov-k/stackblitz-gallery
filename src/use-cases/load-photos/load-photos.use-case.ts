import { Injectable } from "@angular/core";
import { UseCase } from "../../domain/interfaces/use-case";
import { PhotoRepository } from "../../repositories/photo.repository";
import { StoreRepository } from "../../repositories/store.repository";
import { FavoriteRepository } from "../../repositories/favorite.repository";

@Injectable({
    providedIn: 'root'
})
export class LoadPhotosUseCase implements UseCase {
    constructor(
        private readonly storeRepository: StoreRepository,
        private readonly photoRepository: PhotoRepository,
        private readonly favoriteRepository: FavoriteRepository,
    ) {}

    public async invoke() {
        this.storeRepository.setIsLoading(true);
        // Add specific delay for displaying loader
        await new Promise(resolve => setTimeout(resolve, 1_000));
        const currentPage = await this.storeRepository.getCurrentPage();
        const photos = await this.photoRepository.getList(currentPage);
        const favoritesIdList = this.favoriteRepository.getFavoriteIdList();
        const markedAsFavoritePhotoList = photos.map(photo => ({
            ...photo,
            isFavorite: favoritesIdList.includes(photo.id),
        }))
        this.storeRepository.addPage(currentPage, markedAsFavoritePhotoList);
        this.storeRepository.setIsLoading(false);
    }
}