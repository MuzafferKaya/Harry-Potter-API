import { createSlice } from "@reduxjs/toolkit";

const key = "spells";
const initialState = {
  spells: JSON.parse(localStorage.getItem(key)) || [],
};

export const spellFavoriterSlice = createSlice({
  name: "spellFavoriter",
  initialState,
  reducers: {
    addSpellFavorite: (state, action) => {
      const newSpell = [...state.spells, action.payload];
      state.spells = newSpell;
      localStorage.setItem(key, JSON.stringify(newSpell));
    },
    removeSpellFavorite: (state, action) => {
      const updatedSpell = state.spells.filter(
        (favorite) => favorite.id !== action.payload.id
      );
      state.spells = updatedSpell;
      localStorage.setItem(key, JSON.stringify(updatedSpell));
    },
  },
});

export const { addSpellFavorite, removeSpellFavorite } =
  spellFavoriterSlice.actions;

export default spellFavoriterSlice.reducer;
