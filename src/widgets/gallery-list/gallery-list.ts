import { Component } from '@angular/core';
import { StoreRepository } from '../../repositories/store.repository';
import { PhotoList } from '../../components/photo-list/photo-list';
import { LoadPageUseCase } from '../../use-cases/load-page/load-page.use-case';
import { Observable, takeUntil } from 'rxjs';
import { Photo } from '../../domain/interfaces/photo';
import { CommonModule } from '@angular/common';
import { FavoriteUseCase } from '../../use-cases/favotire/favorite.use-case';

@Component({
  selector: 'app-gallery-list',
  templateUrl: './gallery-list.html',
  styleUrl: './gallery-list.scss',
  imports: [CommonModule, PhotoList]
})
export class GalleryList {
  public readonly photoList$: Observable<Photo[]> = this.storeRepository.getPhotoList$();

  constructor(
    private readonly loadPageUseCase: LoadPageUseCase,
    private readonly storeRepository: StoreRepository,
    private readonly favoriteUseCase: FavoriteUseCase,
  ) {
    this.loadPageUseCase.invoke();
  }

  public onClickCard(id: string): void {
    this.favoriteUseCase.invoke(id);
  }
}
