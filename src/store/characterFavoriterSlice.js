import { createSlice } from "@reduxjs/toolkit";

const key = "characters";
const initialState = {
  characters: JSON.parse(localStorage.getItem(key)) || [],
};

export const characterFavoriterSlice = createSlice({
  name: "characterFavoriter",
  initialState,
  reducers: {
    addCharacterFavorite: (state, action) => {
      const newCharacters = [...state.characters, action.payload];
      state.characters = newCharacters;
      localStorage.setItem(key, JSON.stringify(newCharacters));
    },
    removeCharacterFavorite: (state, action) => {
      const updatedCharacter = state.characters.filter(
        (favorite) => favorite.id !== action.payload.id
      );
      state.characters = updatedCharacter;
      localStorage.setItem(key, JSON.stringify(updatedCharacter));
    },
  },
});

export const { addCharacterFavorite, removeCharacterFavorite } =
  characterFavoriterSlice.actions;

export default characterFavoriterSlice.reducer;
