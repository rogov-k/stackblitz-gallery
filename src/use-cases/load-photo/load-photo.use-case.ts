import { Injectable } from "@angular/core";
import { Photo } from "../../domain/interfaces/photo";
import { UseCase } from "../../domain/interfaces/use-case";
import { FavoriteRepository } from "../../repositories/favorite.repository";
import { PhotoRepository } from "../../repositories/photo.repository";

@Injectable({
    providedIn: 'root'
})
export class LoadPhotoUseCase implements UseCase {
    constructor(
        private readonly photoRepository: PhotoRepository,
        private readonly favoriteRepository: FavoriteRepository,
    ) {}

    public async invoke(id: string): Promise<Photo> {
        const photo = await this.photoRepository.getPhoto(id);
        const favoritePhotoIdList = this.favoriteRepository.getFavoriteIdList();

        return {
            ...photo,
            isFavorite: favoritePhotoIdList.includes(photo.id),
        };
    }
}