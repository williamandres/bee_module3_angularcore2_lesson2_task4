import { createAction, props } from '@ngrx/store';
import { IBook } from 'src/app/core/interfaces';

export const addBook = createAction(
  '[Book] Add Book',
  props<{ newBook: IBook }>()
);

export const updateBook = createAction('[Book] Update Book', props<IBook>());

export const updateId = createAction(
  '[Book] Update Id',
  props<{ id: string }>()
);

export const updateDescription = createAction(
  '[Book] Update Description',
  props<{ description: string }>()
);

export const updateTitle = createAction(
  '[Book] Update Title',
  props<{ title: string }>()
);

export const updatePageCount = createAction(
  '[Book] Update Title',
  props<{ pageCount: number }>()
);

export const updatePublishDate = createAction(
  '[Book] Update PublishDate',
  props<{ publishDate: number }>()
);
