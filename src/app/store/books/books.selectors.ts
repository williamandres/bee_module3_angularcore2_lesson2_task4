import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IAppState, IBookStore } from '../../core/interfaces';

export const booksStoreSelector = createFeatureSelector<IAppState, IBookStore>(
  'booksStore'
);

export const booksSelector = createSelector(
  booksStoreSelector,
  (booksSelector) => booksSelector.books
);
