import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "./filterReducer";

const store = configureStore({
  reducer: {
    filter: filterReducer,
  },
});

export default store;
