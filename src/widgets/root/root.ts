import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';

@Component({
  selector: 'app-root',
  templateUrl: './root.html',
  styleUrl: './root.scss',
  imports: [MatButtonModule, MatToolbarModule, RouterOutlet, RouterLink, RouterLinkActive],
})
export class Root {}
