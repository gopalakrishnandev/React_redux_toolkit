import { configureStore } from "@reduxjs/toolkit";
import songsSlice from "../redux-toolkit/songActionReducer";

//combine multiple reducers
const store = configureStore({
  reducer: {
    song: songsSlice.reducer,
  },
});

export { store };
