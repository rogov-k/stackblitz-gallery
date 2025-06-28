import { Component } from '@angular/core';
import { PhotoRepository } from '../../repositories/photo.repository';
import { StoreRepository } from '../../repositories/store.repository';
import { Store } from '@ngrx/store';
import { LoadPageUseCase } from '../../use-cases/load-page/load-page.use-case';

@Component({
  selector: 'app-gallery-list',
  templateUrl: './gallery-list.html',
  styleUrl: './gallery-list.css'
})
export class GalleryList {
  constructor(
    private readonly loadPageUseCase: LoadPageUseCase,
    private readonly storeRepository: StoreRepository,
  ) {
    this.loadPageUseCase.invoke();
    this.storeRepository.getList$().subscribe(data => console.log(data));
  }
}
