import { IStoreRepository } from "../domain/interfaces/repositories";
import { IState, initialState } from "../store/reducer";
import { of } from "rxjs";
import { Photo } from "../domain/interfaces/photo";

export class StoreRepositoryFake implements IStoreRepository {
    state: IState = initialState;

    public getPhotoList$ = jest.fn(() => {
        return of(this.state.photoList);
    });

    public getPhotoList = jest.fn(() => {
        return Promise.resolve(this.state.photoList);
    });

    public getFavotirePholoList$ = jest.fn(() => {
        return of(this.state.favotirePhotoList);
    });

    public getIsLoading$ = jest.fn(() => {
        return of(this.state.isLoading);
    });

    public getIsLoading = jest.fn(() => {
        return Promise.resolve(this.state.isLoading);
    });

    public getCurrentPage = jest.fn(() => {
        return Promise.resolve(this.state.currentPage);
    });

    public addPage = jest.fn((_pageNumber: number, photoList: Photo[]) => {
        this.state.photoList.push(...photoList);
        this.state.currentPage++; 
    });

    public addToFavorite = jest.fn((id: string) => {
        this.state.photoList = this.state.photoList.map(photo => ({
            ...photo,
            isFavorite: photo.id === id ? true : photo.isFavorite,
        }));
    });
    public removeFromFavorite = jest.fn((id: string) => {
        this.state.photoList = this.state.photoList.map(photo => ({
            ...photo,
            isFavorite: photo.id === id ? false : photo.isFavorite,
        }));
    });
    public setIsLoading = jest.fn((isLoading: boolean) => {
        this.state.isLoading = isLoading;
    });
    public storeFavoritePhotoList = jest.fn((photoList: Photo[]) => {
        this.state.favotirePhotoList = photoList;
    });
}