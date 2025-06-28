import { Injectable } from "@angular/core";
import { UseCase } from "../../domain/interfaces/use-case";
import { FavoriteRepository } from "../../repositories/favorite.repository";
import { StoreRepository } from "../../repositories/store.repository";

@Injectable({
    providedIn: 'root'
})
export class FavoriteUseCase implements UseCase {
    constructor(
        private readonly storeRepository: StoreRepository,
        private readonly favoriteRepository: FavoriteRepository,
    ) {}

    public async invoke(id: string): Promise<void> {
        const photoList = await this.storeRepository.getPhotoList();
        const photo = photoList.find(el => el.id === id);
        if (!photo) {
            return; 
        }

        if (photo.isFavorite) {
            this.favoriteRepository.removeFromFavorite(id);
            this.storeRepository.removeFromFavorite(id);
        } else {
            this.favoriteRepository.addToFavorite(id);
            this.storeRepository.addToFavorite(id);
        }
    }
}