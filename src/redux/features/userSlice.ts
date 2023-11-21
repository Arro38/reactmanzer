import { AuthContent } from "@/models/AuthContent";
import User from "@/models/User";
import {
  loginUser,
  fetchUserData,
  registerUser,
  logoutUser,
} from "@/services/auth";
import { createSlice } from "@reduxjs/toolkit";

export interface UserState {
  token: string;
  user: User;
  isLogged: boolean;
  loading: boolean;
  authContent: AuthContent;
  sucessMessage: string;
  errorMessage: string;
}

const initialState: UserState = {
  token: "",
  user: {
    id: 0,
    email: "",
    name: "",
    sector_id: 0,
  },
  isLogged: false,
  loading: false,
  authContent: "none",
  sucessMessage: "",
  errorMessage: "",
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
    setSucessMessage(state, action) {
      state.sucessMessage = action.payload;
    },
    setErrorMessage(state, action) {
      state.errorMessage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.loading = false;
      if (action.payload === false) {
        state.authContent = "login";
        state.errorMessage = "Identifiant ou mot de passe incorrect";
        return;
      }
      state.sucessMessage = "Connexion réussie";
      state.token = action.payload;
      state.isLogged = true;
      state.authContent = "none";
    });
    builder.addCase(registerUser.fulfilled, (state, action) => {
      state.loading = false;
      if (action.payload === false) {
        state.errorMessage = "Une erreur est survenue";
        state.authContent = "register";
        return;
      }
      state.sucessMessage = "Inscription réussie";
      state.authContent = "none";
      state.token = action.payload;
      state.isLogged = true;
    });
    builder.addCase(fetchUserData.fulfilled, (state, action) => {
      state.loading = false;
      console.log(action.payload);
      if (action.payload === false) {
        // state.token = "";
        return;
      }
      state.user = action.payload;
    });
    builder.addCase(logoutUser.fulfilled, (state, action) => {
      state.loading = false;
      if (action.payload === false) {
        state.errorMessage = "Une erreur est survenue";
        return;
      }
      state.sucessMessage = "Déconnexion réussie";
      state.token = "";
      state.isLogged = false;
      state.user = {
        id: 0,
        email: "",
        name: "",
        sector_id: 0,
      };
    });
  },
});
export const { setLoading, setAuthContent } = userSlice.actions;
export default userSlice.reducer;
