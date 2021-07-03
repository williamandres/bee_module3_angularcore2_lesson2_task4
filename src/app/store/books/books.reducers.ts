import { createReducer, on } from '@ngrx/store';
import { IBookStore } from 'src/app/core/interfaces';
import { addBook } from './books-actions';

const INITIAL_STATE: IBookStore = {
  books: [],
};

export const bookReducer = createReducer(
  INITIAL_STATE,
  on(addBook, (state, action) => ({
    ...state,
    books: [...state.books, action.newBook],
  }))
);
