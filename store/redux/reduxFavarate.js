import { createSlice } from "@reduxjs/toolkit";

const faverateSlice = createSlice({
  name: "favorates",
  initialState: {
    ids: [],
  },
  reducers: {
    addFavorite: (state, action) => {
      state.ids.push(action.payload.id);
    },
    removeFavorite: (state, action) => {
      state.ids.splice(state.ids.indexOf(action.payload.id), 1);
    },
  },
});
export const addFavorite = faverateSlice.actions.addFavorite;
export const removeFavorite = faverateSlice.actions.removeFavorite;
export default faverateSlice;
