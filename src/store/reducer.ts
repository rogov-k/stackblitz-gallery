import { createReducer, on } from '@ngrx/store';
import { addPage, addToFavorite, removeFromFavorite, setIsLoading } from './actions';
import { Photo } from '../domain/interfaces/photo';

export interface IState {
  photos: Photo[];
  currentPage: number;
  isLoading: boolean;
}

export const initialState: IState = {
  photos: [],
  currentPage: 1,
  isLoading: false,
};

export const _mainReducer = createReducer(
  initialState,
  on(addPage, (state, payload): IState => {
    return {
      ...state,
      currentPage: state.currentPage + 1,
      photos: [
        ...state.photos,
        ...payload.photos,
      ],
    };
  }),
  on(addToFavorite, (state, payload)=> {
    return {
      ...state,
      photos: state.photos.map(photo => ({
        ...photo,
        isFavorite: photo.id === payload.id ? true : photo.isFavorite
      })),
    }
  }),
  on(removeFromFavorite, (state, payload)=> {
    return {
      ...state,
      photos: state.photos.map(photo => ({
        ...photo,
        isFavorite: photo.id === payload.id ? false : photo.isFavorite
      })),
    }
  }),
  on(setIsLoading, (state, payload) => ({
    ...state,
    isLoading: payload.isLoading,
  })),
);

export function mainReducer(state: any, action: any) {
  return _mainReducer(state, action);
}