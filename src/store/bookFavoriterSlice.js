import { createSlice } from "@reduxjs/toolkit";

const key = "books";
const initialState = {
  books: JSON.parse(localStorage.getItem(key)) || [],
};

export const bookFavoriterSlice = createSlice({
  name: "bookFavoriter",
  initialState,
  reducers: {
    addBookFavorite: (state, action) => {
      const newBook = [...state.books, action.payload];
      state.books = newBook;
      localStorage.setItem(key, JSON.stringify(newBook));
    },
    removeBookFavorite: (state, action) => {
      const updatedBook = state.books.filter(
        (favorite) => favorite.id !== action.payload.id
      );
      state.books = updatedBook;
      localStorage.setItem(key, JSON.stringify(updatedBook));
    },
  },
});

export const { addBookFavorite, removeBookFavorite } =
  bookFavoriterSlice.actions;

export default bookFavoriterSlice.reducer;
