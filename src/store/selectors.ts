import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IState } from './reducer';

export const selectFeature = createFeatureSelector<IState>('main');

export const selectCurrentPage = createSelector(
  selectFeature,
  (state: IState) => state.currentPage,
);

export const selectPhotoList = createSelector(
  selectFeature,
  (state: IState) => state.photoList,
);

export const selectFavoritePhotoList = createSelector(
  selectFeature,
  (state: IState) => state.favotirePhotoList,
);

export const selectIsLoading = createSelector(
  selectFeature,
  (state: IState) => state.isLoading,
);
