import { createReducer, on } from "@ngrx/store";
import { IBook } from "src/app/core/interfaces";
import { updateId,  updateDescription, updateTitle, updatePageCount, updatePublishDate, updateBook  } from "./books-actions";

const INITIAL_STATE: IBook = {
    id:0,
    title:'',
    description:'',
    pageCount:0,
    publishDate:0,
};

export const userReducer = createReducer(
    INITIAL_STATE,
    on(updateBook, (state, { id, title, description, pageCount, publishDate }) => ({ id, title, description, pageCount, publishDate })),
    
  );


