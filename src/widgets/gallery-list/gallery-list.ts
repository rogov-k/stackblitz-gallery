import { Component, ElementRef, HostListener } from '@angular/core';
import { StoreRepository } from '../../repositories/store.repository';
import { PhotoList } from '../../components/photo-list/photo-list';
import { Observable } from 'rxjs';
import { Photo } from '../../domain/interfaces/photo';
import { CommonModule } from '@angular/common';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { LoadPhotosUseCase } from '../../use-cases/load-photos/load-photos.use-case';
import { ManageFavoriteUseCase } from '../../use-cases/manage-favorite/manage-favorite.use-case';

@Component({
  selector: 'app-gallery-list',
  templateUrl: './gallery-list.html',
  styleUrl: './gallery-list.scss',
  imports: [CommonModule, PhotoList, MatProgressBarModule]
})
export class GalleryList {
  public readonly photoList$: Observable<Photo[]> = this.storeRepository.getPhotoList$();
  public readonly isLoading$: Observable<boolean> = this.storeRepository.getIsLoading$();
  
  @HostListener('scroll', ['$event'])
  public async onScroll(): Promise<void> {
    const element = this.elementRef.nativeElement;
    const threshold = 100;
    const position = element.scrollTop + element.clientHeight;
    const height = element.scrollHeight;

    const isLoading = await this.storeRepository.getIsLoading();

    if (isLoading) {
      return;
    }

    if (position + threshold >= height) {
      this.loadPhotosUseCase.invoke();
    }
  }

  constructor(
    private readonly elementRef: ElementRef,
    private readonly loadPhotosUseCase: LoadPhotosUseCase,
    private readonly storeRepository: StoreRepository,
    private readonly manageFavoriteUseCase: ManageFavoriteUseCase,
  ) {
    this.loadPhotosUseCase.invoke();
  }

  public onClickCard(id: string): void {
    this.manageFavoriteUseCase.invoke(id);
  }
}
