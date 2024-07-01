import { configureStore } from "@reduxjs/toolkit";
import bookFavoriterSlice from "./bookFavoriterSlice";
import characterFavoriterSlice from "./characterFavoriterSlice";
import movieFavoriterSlice from "./movieFavoriterSlice";
import potionFavoriterSlice from "./potionFavoriterSlice";
import spellFavoriterSlice from "./spellFavoriterSlice";

const store = configureStore({
  reducer: {
    bookFavoriterStore: bookFavoriterSlice,
    characterFavoriterStore: characterFavoriterSlice,
    movieFavoriterStore: movieFavoriterSlice,
    potionFavoriterStore: potionFavoriterSlice,
    spellFavoriterStore: spellFavoriterSlice,
  },
});

export default store;
