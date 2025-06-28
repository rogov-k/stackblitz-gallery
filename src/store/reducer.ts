import { createReducer, on } from '@ngrx/store';
import { addPage, addToFavorite, removeFromFavorite } from './actions';
import { Photo } from '../domain/interfaces/photo';
import { Page } from '../domain/interfaces/page';

export interface IState {
  pages: Page<Photo>[];
  currentPage: number;
}

export const initialState: IState = {
  pages: [],
  currentPage: 0,
};

export const _mainReducer = createReducer(
  initialState,
  on(addPage, (state, payload): IState => {
    return {
      ...state,
      currentPage: state.currentPage + 1,
      pages: [
        ...state.pages,
        {
          pageNumber: payload.pageNumber,
          data: payload.photos,
        } 
      ],
    };
  }),
  on(addToFavorite, (state, payload)=> {
    return {
      ...state,
      pages: state.pages.map(page => ({
        ...page,
        data: page.data.map(photo => ({
          ...photo,
          isFavorite: photo.id === payload.id ? true : photo.isFavorite
        }))
      })),
    }
  }),
  on(removeFromFavorite, (state, payload)=> {
    return {
      ...state,
      pages: state.pages.map(page => ({
        ...page,
        data: page.data.map(photo => ({
          ...photo,
          isFavorite: photo.id === payload.id ? false : photo.isFavorite
        }))
      })),
    }
  }),
);

export function mainReducer(state: any, action: any) {
  return _mainReducer(state, action);
}