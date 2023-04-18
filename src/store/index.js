import { configureStore } from "@reduxjs/toolkit";
import movieSlice from "../redux-toolkit/movieActionReducer";
import songsSlice from "../redux-toolkit/songActionReducer";

//combine multiple reducers
const store = configureStore({
  reducer: {
    song: songsSlice.reducer,
    movie: movieSlice.reducer,
  },
});

export { store };
