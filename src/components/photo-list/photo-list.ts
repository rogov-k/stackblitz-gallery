import { Component, input, output } from '@angular/core';
import { Photo } from '../../domain/interfaces/photo';
import { PhotoCard } from '../photo-card/photo-card';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.html',
  styleUrl: './photo-list.scss',
  imports: [PhotoCard],
})
export class PhotoList {
  public photoList = input.required<Photo[]>();
  
  public clickCard = output<string>();
}
