import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable, firstValueFrom, take } from "rxjs";
import { Photo } from "../domain/interfaces/photo";
import { IState } from "../store/reducer";
import { selectCurrentPage, selectIsLoading, selectPhotoList } from "../store/selectors";
import { addPage, addToFavorite, removeFromFavorite, setIsLoading } from "../store/actions";

@Injectable({
    providedIn: 'root'
})
export class StoreRepository {
  constructor(private store: Store<IState>) {}

  public getPhotoList$(): Observable<Photo[]> {
    return this.store.select(selectPhotoList);
  }

  public getPhotoList(): Promise<Photo[]> {
    return firstValueFrom(this.store.select(selectPhotoList).pipe(take(1)));
  }

  public getIsLoading$(): Observable<boolean> {
    return this.store.select(selectIsLoading);
  }

  public getIsLoading(): Promise<boolean> {
    return firstValueFrom(this.store.select(selectIsLoading).pipe(take(1)));
  }

  public getCurrentPage(): Promise<number> {
    return firstValueFrom(this.store.select(selectCurrentPage).pipe(take(1)));
  }

  public addPage(pageNumber: number, photos: Photo[]): void {
    this.store.dispatch(addPage({pageNumber, photos }));
  }

  public addToFavorite(id: string): void {
    this.store.dispatch(addToFavorite({id}));
  }

  public removeFromFavorite(id: string): void {
    this.store.dispatch(removeFromFavorite({id}));
  }

  public setIsLoading(isLoading: boolean): void {
    this.store.dispatch(setIsLoading({isLoading}));
  }
}