import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Photo, PhotoExternal } from '../domain/interfaces/photo';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PhotoRepository {
  constructor(private readonly http: HttpClient) { }

  public getList(page: number, limit: number = 20): Promise<Photo[]> {
    return firstValueFrom(this.http.get<PhotoExternal[]>('https://picsum.photos/v2/list', {params: {
      page, 
      limit,
    }})).then(data => data.map(photo => PhotoRepository.mapPhotoToDomain(photo)));
  }


  private static mapPhotoToDomain(data: PhotoExternal): Photo {
    return {
      id: data.id,
      author: data.author,
      url: data.url,
      download_url: data.download_url,
      isFavorite: false,
    }
  }
}
