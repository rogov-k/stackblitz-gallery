import { Injectable } from "@angular/core";
import { UseCase } from "../../domain/interfaces/use-case";
import { PhotoRepository } from "../../repositories/photo.repository";
import { StoreRepository } from "../../repositories/store.repository";

@Injectable({
    providedIn: 'root'
})
export class LoadPageUseCase implements UseCase {
    constructor(
        private readonly storeRepository: StoreRepository,
        private readonly photoRepository: PhotoRepository,
    ) {}

    public async invoke() {
        const currentPage = await this.storeRepository.getCurrentPage();
        const photos = await this.photoRepository.getList(currentPage);
        this.storeRepository.addPage(currentPage, photos);
    }
}