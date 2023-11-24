import { createSlice } from "@reduxjs/toolkit";

export interface ToastMessage {
  title: string;
  message: string;
}

export interface ToastState {
  success: ToastMessage;
  error: ToastMessage;
}

const initialState: ToastState = {
  success: {
    title: "",
    message: "",
  },
  error: {
    title: "",
    message: "",
  },
};
const toastSlice = createSlice({
  name: "toast",
  initialState,
  reducers: {
    setErrorMessage(state, action) {
      state.error.message = action.payload.message;
      state.error.title = action.payload.title;
    },
    setSuccessMessage(state, action) {
      state.success.message = action.payload.message;
      state.success.title = action.payload.title;
    },
    resetToast(state) {
      state.success.message = "";
      state.success.title = "";
      state.error.message = "";
      state.error.title = "";
    },
  },
});

export const { setErrorMessage, setSuccessMessage, resetToast } =
  toastSlice.actions;
export default toastSlice.reducer;
