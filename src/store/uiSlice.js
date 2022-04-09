import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    notification: {
      status: "pending",
    },
  },
  reducers: {
    setStatus(state, action) {
      state.notification = {
        status: action.payload.status,
      };
    },
  },
});

export const { setStatus } = uiSlice.actions;

export default uiSlice.reducer;
