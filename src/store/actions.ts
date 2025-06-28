import { createAction, props } from '@ngrx/store';
import { Photo } from '../domain/interfaces/photo';

const prefix = 'Store';

export const addPage = createAction(`[${prefix}] Add page`, props<{ pageNumber: number; photos: Photo[] }>());