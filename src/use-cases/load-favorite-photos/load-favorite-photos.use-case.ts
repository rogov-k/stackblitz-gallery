import { Injectable } from "@angular/core";
import { UseCase } from "../../domain/interfaces/use-case";
import { StoreRepository } from "../../repositories/store.repository";
import { FavoriteRepository } from "../../repositories/favorite.repository";
import { PhotoRepository } from "../../repositories/photo.repository";

@Injectable({
    providedIn: 'root'
})
export class LoadFavotirePhotosUseCase implements UseCase {
    constructor(
        private readonly storeRepository: StoreRepository,
        private readonly photoRepository: PhotoRepository,
        private readonly favoriteRepository: FavoriteRepository,
    ) {}
    
    public async invoke(): Promise<void> {
        this.storeRepository.storeFavoritePhotoList([]);
        const favoritePhotoIdList = this.favoriteRepository.getFavoriteIdList();
        const photoList = await Promise.all(
            favoritePhotoIdList.map(id => this.photoRepository.getPhoto(id))
        );
        const markedAsFavoritePhotoList = photoList.map(photo => ({
            ...photo,
            isFavorite: true,
        }))
        this.storeRepository.storeFavoritePhotoList(markedAsFavoritePhotoList);
    }
}