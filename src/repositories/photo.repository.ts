import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Photo } from '../domain/interfaces/photo';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PhotoRepository {
  constructor(private readonly http: HttpClient) { }

  public getList(page: number, limit: number = 20): Promise<Photo[]> {
    return firstValueFrom(this.http.get<Photo[]>('https://picsum.photos/v2/list', {params: {
      page, 
      limit,
    }}));
  }
}
