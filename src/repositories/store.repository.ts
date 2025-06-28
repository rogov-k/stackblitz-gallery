import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable, firstValueFrom, take } from "rxjs";
import { Photo } from "../domain/interfaces/photo";
import { IState } from "../store/reducer";
import { Page } from "../domain/interfaces/page";
import { selectCurrentPage, selectPages, selectPhotoList } from "../store/selectors";
import { addPage } from "../store/actions";

@Injectable({
    providedIn: 'root'
  })
  export class StoreRepository {
    constructor(private store: Store<IState>) {}
  
    // public getList(): Promise<Page<Photo>[]> {
    //   return firstValueFrom(this.store.select(selectFeature).pipe(take(1)));
    // }

    public getList$(): Observable<any> {
      return this.store.select(selectPages);
    }

    public getPhotoList$(): Observable<Photo[]> {
      return this.store.select(selectPhotoList);
    }

    public getCurrentPage(): Promise<number> {
      return firstValueFrom(this.store.select(selectCurrentPage).pipe(take(1)));
    }

    public addPage(pageNumber: number, photos: Photo[]): void {
      this.store.dispatch(addPage({pageNumber, photos }));
    }
  }