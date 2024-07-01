import { createSlice } from "@reduxjs/toolkit";

const key = "potions";
const initialState = {
  potions: JSON.parse(localStorage.getItem(key)) || [],
};

export const potionFavoriterSlice = createSlice({
  name: "potionFavoriter",
  initialState,
  reducers: {
    addPotionFavorite: (state, action) => {
      const newPotion = [...state.potions, action.payload];
      state.potions = newPotion;
      localStorage.setItem(key, JSON.stringify(newPotion));
    },
    removePotionFavorite: (state, action) => {
      const updatedPotion = state.potions.filter(
        (favorite) => favorite.id !== action.payload.id
      );
      state.potions = updatedPotion;
      localStorage.setItem(key, JSON.stringify(updatedPotion));
    },
  },
});

export const { addPotionFavorite, removePotionFavorite } =
  potionFavoriterSlice.actions;

export default potionFavoriterSlice.reducer;
