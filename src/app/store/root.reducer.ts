'@ngrx/store';
import { Action, ActionReducerMap } from '@ngrx/store';
import { IAppState } from '../core/interfaces';
import { bookReducer } from './books/books.reducers';

export const rootReducer: ActionReducerMap<IAppState, Action> = {
  booksStore: bookReducer,
};
