import { Observable } from "rxjs";
import { Photo } from "./photo";

export interface IFavoriteRepository {
    addToFavorite(id: string): void;
    removeFromFavorite(id: string): void;
    getFavoriteIdList(): string[];
}

export interface IPhotoRepository {
    getPhoto(id: string): Promise<Photo>;
    getList(page: number, limit: number): Promise<Photo[]>;
}

export interface IStoreRepository {
    getPhotoList$(): Observable<Photo[]>;
    getPhotoList(): Promise<Photo[]>;
    getFavotirePholoList$(): Observable<Photo[]>;
    getIsLoading$(): Observable<boolean>;
    getIsLoading(): Promise<boolean>;
    getCurrentPage(): Promise<number>;
    addPage(pageNumber: number, photoList: Photo[]): void;
    addToFavorite(id: string): void;
    removeFromFavorite(id: string): void;
    setIsLoading(isLoading: boolean): void;
    storeFavoritePhotoList(photoList: Photo[]): void;
}