import { Injectable } from "@angular/core";

const FAVORITE_KEY = 'YOUR_FAVORITE_IMAGES';

@Injectable({
    providedIn: 'root'
})
export class FavoriteRepository {
    public addToFavorite(id: string): void {
        const stateJson = window.localStorage.getItem(FAVORITE_KEY) || '[]';
        const state = JSON.parse(stateJson) as string[];
        const newState = [...state, id];
        const newStateJson = JSON.stringify(newState);
        window.localStorage.setItem(FAVORITE_KEY, newStateJson);
    }

    public removeFromFavorite(id: string): void {
        const stateJson = window.localStorage.getItem(FAVORITE_KEY) || '[]';
        const state = JSON.parse(stateJson) as string[];
        const newState = state.filter(el => el !== id);
        const newStateJson = JSON.stringify(newState);
        window.localStorage.setItem(FAVORITE_KEY, newStateJson);
    }

    public getFavoriteIdList(): string[] {
        const stateJson = window.localStorage.getItem(FAVORITE_KEY) || '[]';
        const state = JSON.parse(stateJson) as string[];

        return state;
    }
}
  