import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Page } from '../domain/interfaces/page';
import { Photo } from '../domain/interfaces/photo';
import { IState } from './reducer';

export const selectFeature = createFeatureSelector<IState>('main');

export const selectPages = createSelector(
    selectFeature,
    (state: IState) => state.pages
  );

export const selectCurrentPage = createSelector(
    selectFeature,
    (state: IState) => state.currentPage,
);