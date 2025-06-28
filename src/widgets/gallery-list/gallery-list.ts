import { Component } from '@angular/core';
import { StoreRepository } from '../../repositories/store.repository';
import { PhotoList } from '../../components/photo-list/photo-list';
import { LoadPageUseCase } from '../../use-cases/load-page/load-page.use-case';
import { Observable, takeUntil } from 'rxjs';
import { Page } from '../../domain/interfaces/page';
import { Photo } from '../../domain/interfaces/photo';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gallery-list',
  templateUrl: './gallery-list.html',
  styleUrl: './gallery-list.scss',
  imports: [CommonModule, PhotoList]
})
export class GalleryList {
  public readonly photoList$: Observable<Photo[]>;

  constructor(
    private readonly loadPageUseCase: LoadPageUseCase,
    private readonly storeRepository: StoreRepository,
  ) {
    this.photoList$ = this.storeRepository.getPhotoList$();
    this.loadPageUseCase.invoke();
    this.storeRepository.getList$().subscribe(data => console.log(data));
  }
}
