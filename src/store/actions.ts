import { createAction, props } from '@ngrx/store';
import { Photo } from '../domain/interfaces/photo';

const prefix = 'Store';

export const addPage = createAction(`[${prefix}] Add page`, props<{ pageNumber: number; photoList: Photo[] }>());
export const storeFavotirePhotos = createAction(`[${prefix}] Store favotires photos`, props<{ photoList: Photo[] }>());
export const addToFavorite = createAction(`[${prefix}] Add to favorite`, props<{ id: string }>());
export const removeFromFavorite = createAction(`[${prefix}] Remove from favorite`, props<{ id: string }>());
export const setIsLoading = createAction(`[${prefix}] Set loading`, props<{ isLoading: boolean }>());