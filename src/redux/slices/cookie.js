import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  usage: false,
};

export const cookieSlice = createSlice({
  name: "cookie",
  initialState,
  reducers: {
    setUsage: (state, action) => {
      state.usage = action.payload;
    },
  },
});

export const { setUsage } = cookieSlice.actions;

export default cookieSlice.reducer;
