import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Photo, PhotoExternal } from '../domain/interfaces/photo';
import { firstValueFrom } from 'rxjs';
import { IPhotoRepository } from '../domain/interfaces/repositories';

@Injectable({
  providedIn: 'root'
})
export class PhotoRepository implements IPhotoRepository {
  constructor(private readonly http: HttpClient) { }

  public getPhoto(id: string): Promise<Photo> {
    return firstValueFrom(this.http.get<PhotoExternal>(`https://picsum.photos/id/${id}/info`))
    .then(data => PhotoRepository.mapPhotoToDomain(data));
  }

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
      fullSizeUrl: data.download_url,
      smallSizeUrls: `https://picsum.photos/id/${data.id}/450/250`,
      isFavorite: false,
    }
  }
}
