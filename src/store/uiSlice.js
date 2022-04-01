import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    notification: {
      status: "pending",
      title: "pending",
      message: "Pending",
    },
  },
  reducers: {
    showNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
  },
});

export const { showNotification } = uiSlice.actions;

export default uiSlice.reducer;
