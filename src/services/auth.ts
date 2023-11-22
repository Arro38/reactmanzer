import { API_URL } from "@/config/constants";
import { createAsyncThunk } from "@reduxjs/toolkit";
import Token from "@/models/Token";
import User from "@/models/User";

const loginUser = createAsyncThunk(
  "auth/login",
  async ({ email, password }: { email: string; password: string }) => {
    try {
      const response = await fetch(API_URL + "login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      if (!response.ok) return false;
      const result = (await response.json()) as Token;
      return result.token;
    } catch (error) {
      console.log(error);
      return false;
    }
  }
);

const logoutUser = createAsyncThunk("auth/logout", async (token: string) => {
  try {
    const response = await fetch(API_URL + "logout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    if (!response.ok) return false;
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
});

const registerUser = createAsyncThunk(
  "auth/register",
  async ({ user, password }: { user: User; password: string }) => {
    try {
      const data = JSON.stringify({ ...user, password });
      const response = await fetch(API_URL + "register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: data,
      });

      if (!response.ok) return false;
      const result = (await response.json()) as Token;
      console.log(result);
      return result.token;
    } catch (error) {
      console.log(error);
      return false;
    }
  }
);

const fetchUserData = createAsyncThunk("auth/me", async (token: string) => {
  try {
    const response = await fetch(API_URL + "users/me", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      method: "POST",
    });
    if (!response.ok) return false;
    const result = (await response.json()) as User;
    return result;
  } catch (error) {
    console.log(error);
    return false;
  }
});
export { loginUser, logoutUser, registerUser, fetchUserData };
