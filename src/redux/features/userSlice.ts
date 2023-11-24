import { AuthContent } from "@/models/AuthContent";
import User from "@/models/User";
import {
  loginUser,
  fetchUserData,
  registerUser,
  logoutUser,
  sendResetPasswordEmail,
  updateResetPassword,
} from "@/services/auth";
import { createSlice } from "@reduxjs/toolkit";

export interface UserState {
  token: string;
  user: User;
  isLogged: boolean | null;
  loading: boolean;
  authContent: AuthContent;
}

const initialState: UserState = {
  token: "",
  user: {
    id: 0,
    email: "",
    name: "",
    sector_id: 0,
    tel: "",
    address: "",
  },
  isLogged: null,
  loading: false,
  authContent: "none",
};

const resetUser = (state: any) => {
  state.loading = false;
  state.token = "";
  state.isLogged = false;
  state.user = {
    id: 0,
    email: "",
    name: "",
    sector_id: 0,
  };
};
// TODO Refactoring the userSlice.ts file put authContent, successMessage and errorMessage in the same slice (utilSlice.ts)

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setLoading(state, action) {
      state.loading = action.payload;
    },
    setAuthContent(state, action) {
      state.authContent = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginUser.fulfilled, (state, { payload }) => {
      state.loading = false;
      resetUser(state);
      if (payload === false) {
        state.authContent = "login";
        return;
      }
      state.token = payload;
      state.isLogged = true;
      state.authContent = "none";
    });
    builder.addCase(registerUser.fulfilled, (state, { payload }) => {
      state.loading = false;
      if (payload === false) {
        resetUser(state);
        state.authContent = "register";
        return;
      }
      state.authContent = "none";
      state.token = payload;
      state.isLogged = true;
    });
    builder.addCase(fetchUserData.fulfilled, (state, action) => {
      state.loading = false;
      if (action.payload === false) {
        // state.token = "";
        return;
      }
      state.user = action.payload;
    });
    builder.addCase(logoutUser.fulfilled, (state, { payload }) => {
      resetUser(state);
    });
    builder.addCase(sendResetPasswordEmail.fulfilled, (state, { payload }) => {
      state.loading = false;
      // TODO : Update the state to display a message to the user using state from toastSlice.ts

      if (payload === false) {
        return;
      }
    });
    builder.addCase(updateResetPassword.fulfilled, (state, { payload }) => {
      state.loading = false;
      if (payload === false) {
        return;
      }
    });
  },
});
export const { setLoading, setAuthContent } = userSlice.actions;
export default userSlice.reducer;