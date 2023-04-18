import { createSlice } from "@reduxjs/toolkit";

//reducer
const movieSlice = createSlice({
  name: "movie",
  initialState: [],
  reducers: {
    addMovie(state, action) {
      state.push(action.payload);
    },
    removeMovie(state, action) {
      const index = state.indexOf(action.payload);
      state.splice(index, 1);
    },
  },
});

//action
export const { addMovie, removeMovie } = movieSlice.actions;
export default movieSlice;
