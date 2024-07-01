import { createSlice } from "@reduxjs/toolkit";

const key = "movies";
const initialState = {
  movies: JSON.parse(localStorage.getItem(key)) || [],
};

export const movieFavoriterSlice = createSlice({
  name: "movieFavoriter",
  initialState,
  reducers: {
    addMovieFavorite: (state, action) => {
      const newMovie = [...state.movies, action.payload];
      state.movies = newMovie;
      localStorage.setItem(key, JSON.stringify(newMovie));
    },
    removeMovieFavorite: (state, action) => {
      const updatedMovie = state.movies.filter(
        (favorite) => favorite.id !== action.payload.id
      );
      state.movies = updatedMovie;
      localStorage.setItem(key, JSON.stringify(updatedMovie));
    },
  },
});

export const { addMovieFavorite, removeMovieFavorite } =
  movieFavoriterSlice.actions;

export default movieFavoriterSlice.reducer;
