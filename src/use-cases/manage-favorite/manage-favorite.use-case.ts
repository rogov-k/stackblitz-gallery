import { Injectable } from "@angular/core";
import { UseCase } from "../../domain/interfaces/use-case";
import { FavoriteRepository } from "../../repositories/favorite.repository";
import { StoreRepository } from "../../repositories/store.repository";

@Injectable({
    providedIn: 'root'
})
export class ManageFavoriteUseCase implements UseCase {
    constructor(
        private readonly storeRepository: StoreRepository,
        private readonly favoriteRepository: FavoriteRepository,
    ) {}

    public async invoke(id: string, isFavorite?: boolean): Promise<void> {
        if (typeof isFavorite === 'undefined') {
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
        } else {
            if (isFavorite) {
                console.log('add');
                this.favoriteRepository.addToFavorite(id);
            } else {
                console.log('remove');
                this.favoriteRepository.removeFromFavorite(id);
            }
        }
    }
}