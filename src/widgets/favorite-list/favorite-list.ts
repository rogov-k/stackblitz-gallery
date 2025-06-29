import { Component } from '@angular/core';
import { LoadFavotirePhotosUseCase } from '../../use-cases/load-favorite-photos/load-favorite-photos.use-case';
import { Observable } from 'rxjs';
import { StoreRepository } from '../../repositories/store.repository';
import { Photo } from '../../domain/interfaces/photo';
import { PhotoList } from '../../components/photo-list/photo-list';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-favorite-list',
  imports: [CommonModule, PhotoList],
  templateUrl: './favorite-list.html',
  styleUrl: './favorite-list.scss'
})
export class FavoriteList {
  public readonly photoList$: Observable<Photo[]> = this.storeRepository.getFavotirePholoList$();

  constructor(
    private readonly router: Router,
    private readonly storeRepository: StoreRepository,
    private readonly loadFavotirePhotosUseCase: LoadFavotirePhotosUseCase,
  ) {
    this.loadFavotirePhotosUseCase.invoke();
  }

  public onClickCard(id: string): void {
    this.router.navigate(['/photos', id]);
  }
}
