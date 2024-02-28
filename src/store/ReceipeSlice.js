import { createSlice } from "@reduxjs/toolkit";

const ReceipeSlice = createSlice({
  name: "Receipe",
  initialState: [],
  reducers: {
    addToFavourite: (state, action) => {
      return [...state, { ...action.payload }];
    },
    RemoveFavourite: (state, action) => {
      return state.filter((receipe, index) => {
        return receipe.label !== action.payload.ind;
      });
    },
  },
});

export const { addToFavourite, RemoveFavourite } = ReceipeSlice.actions;
export default ReceipeSlice.reducer;
