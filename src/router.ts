import { Routes } from "@angular/router";
import { GalleryList } from "./widgets/gallery-list/gallery-list";
import { FavoriteList } from "./widgets/favorite-list/favorite-list";
import { PhotoDetail } from "./widgets/photo-detail/photo-detail";
import { App } from "./main";

export const routes: Routes = [
    { 
        path: '',
        component: App,
        children: [
            { path: '', component: GalleryList },
            { path: 'favorites', component: FavoriteList },
            { path: 'photos/:id', component: PhotoDetail },
        ],
    },
];
