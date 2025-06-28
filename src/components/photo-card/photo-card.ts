import { Component, input, output } from '@angular/core';
import { Photo } from '../../domain/interfaces/photo';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-photo-card',
  templateUrl: './photo-card.html',
  styleUrl: './photo-card.scss',
  imports: [MatCardModule, MatButtonModule, MatIconModule],
})
export class PhotoCard {
  public photo = input.required<Photo>();

  public clickCard = output<string>();
}
