import { createSlice } from "@reduxjs/toolkit";

//reducer
const songsSlice = createSlice({
  name: "song",
  initialState: [],
  reducers: {
    addSong(state, action) {
      state.push(action.payload);
    },
    // removeSong(state, action) {},
  },
});

//action
export const { addSong } = songsSlice.actions;
export default songsSlice;
