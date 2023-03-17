import { configureStore } from "@reduxjs/toolkit";
import regionReducer from "./regionSlice";

export default configureStore({
  reducer: {
    region: regionReducer,
  },
});
