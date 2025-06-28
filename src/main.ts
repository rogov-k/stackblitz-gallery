import { Component, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { RouterLink, provideRouter } from '@angular/router';
import { routes } from './router';
import { RouterOutlet } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { StoreModule, provideStore } from '@ngrx/store';
import { mainReducer } from './store/reducer';

@Component({
  selector: 'app-root',
  template: `
  <ul>
    <li><a routerLink="">Gallery</a></li>
    <li><a routerLink="favorites">Favorites</a></li>
    <li><a routerLink="photos/1231">photo 1</a></li>
  </ul>
  <router-outlet />`,
  imports: [RouterOutlet, RouterLink],
})
export class App {}

bootstrapApplication(App, {
  providers: [
    provideHttpClient(),
    provideRouter(routes),
    // importProvidersFrom(StoreModule.forRoot({})),
    // importProvidersFrom(StoreModule.forFeature('main', mainReducer)),
    provideStore({main: mainReducer})
  ]
});
