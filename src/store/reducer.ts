import { createReducer, on } from '@ngrx/store';
import { addPage, addToFavorite, removeFromFavorite, setIsLoading, storeFavotirePhotos } from './actions';
import { Photo } from '../domain/interfaces/photo';

export interface IState {
  photoList: Photo[];
  favotirePhotoList: Photo[];
  currentPage: number;
  isLoading: boolean;
}

export const initialState: IState = {
  photoList: [],
  favotirePhotoList: [],
  currentPage: 1,
  isLoading: false,
};

export const _mainReducer = createReducer(
  initialState,
  on(addPage, (state, payload): IState => {
    return {
      ...state,
      currentPage: state.currentPage + 1,
      photoList: [
        ...state.photoList,
        ...payload.photoList,
      ],
    };
  }),
  on(storeFavotirePhotos, (state, payload): IState => ({
    ...state,
    favotirePhotoList: payload.photoList,
  })),
  on(addToFavorite, (state, payload): IState => {
    return {
      ...state,
      photoList: state.photoList.map(photo => ({
        ...photo,
        isFavorite: photo.id === payload.id ? true : photo.isFavorite
      })),
    }
  }),
  on(removeFromFavorite, (state, payload): IState => {
    return {
      ...state,
      photoList: state.photoList.map(photo => ({
        ...photo,
        isFavorite: photo.id === payload.id ? false : photo.isFavorite
      })),
    }
  }),
  on(setIsLoading, (state, payload): IState => ({
    ...state,
    isLoading: payload.isLoading,
  })),
);

export function mainReducer(state: any, action: any) {
  return _mainReducer(state, action);
}