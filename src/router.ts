import { Routes } from "@angular/router";
import { GalleryList } from "./widgets/gallery-list/gallery-list";
import { FavoriteList } from "./widgets/favorite-list/favorite-list";
import { PhotoDetail } from "./widgets/photo-detail/photo-detail";
import { Root } from "./widgets/root/root";

export const routes: Routes = [
    { 
        path: '',
        children: [
            { path: '', component: GalleryList },
            { path: 'favorites', component: FavoriteList },
            { path: 'photos/:id', component: PhotoDetail },
        ],
    },
];
