import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./movieSlice";
import uiReducer from "./uiSlice";

export default configureStore({
  reducer: { movie: movieReducer, ui: uiReducer },
});
