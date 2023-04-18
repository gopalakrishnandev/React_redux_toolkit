import { createSlice } from "@reduxjs/toolkit";

//reducer
const songsSlice = createSlice({
  name: "song",
  initialState: [],
  reducers: {
    addSong(state, action) {
      state.push(action.payload);
    },
    removeSong(state, action) {
      const index = state.indexOf(action.payload);
      state.splice(index, 1);
    },
  },
});

//action
export const { addSong, removeSong } = songsSlice.actions;
export default songsSlice;
