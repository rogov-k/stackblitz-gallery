import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { routes } from './router';
import { provideHttpClient } from '@angular/common/http';
import { provideStore } from '@ngrx/store';
import { mainReducer } from './store/reducer';
import { Root } from './widgets/root/root';

bootstrapApplication(Root, {
  providers: [
    provideHttpClient(),
    provideRouter(routes),
    provideStore({main: mainReducer})
  ]
});
