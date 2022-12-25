import { configureStore } from "@reduxjs/toolkit";

import faverateReducer from "./reduxFavarate";

export const store = configureStore({
  reducer: {
    faverateMeals: faverateReducer,
  },
});
