import { configureStore } from "@reduxjs/toolkit";
import ReceipeSlice from "./ReceipeSlice";
const Store = configureStore({
  reducer: {
    receipe: ReceipeSlice,
  },
});

export default Store;
