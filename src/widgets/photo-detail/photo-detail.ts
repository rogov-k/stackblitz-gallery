import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoadPhotoUseCase } from '../../use-cases/load-photo/load-photo.use-case';
import { Photo } from '../../domain/interfaces/photo';
import { PhotoCard } from '../../components/photo-card/photo-card';
import { MatButtonModule } from '@angular/material/button';
import { ManageFavoriteUseCase } from '../../use-cases/manage-favorite/manage-favorite.use-case';

@Component({
  selector: 'app-photo-detail',
  templateUrl: './photo-detail.html',
  styleUrl: './photo-detail.scss',
  imports: [MatButtonModule, PhotoCard],
})
export class PhotoDetail implements OnInit {
  public photo!: Photo;
  public id!: string;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly loadPhotoUseCase: LoadPhotoUseCase,
    private readonly manageFavoriteUseCase: ManageFavoriteUseCase,
  ) {}
  
  public async ngOnInit(): Promise<void> {
    this.id = this.route.snapshot.paramMap.get('id')!;
    this.photo = await this.loadPhotoUseCase.invoke(this.id);
  }
  
  public onClickAdd(): void {
    this.photo = {
      ...this.photo,
      isFavorite: true,
    };
    this.manageFavoriteUseCase.invoke(this.id, true);
  }

  public onClickRemove(): void {
    this.photo = {
      ...this.photo,
      isFavorite: false,
    };
    this.manageFavoriteUseCase.invoke(this.id, false);
  }
}
