import { configureStore } from "@reduxjs/toolkit";
import mealSlice from "./features/mealSlice";
import userSlice from "./features/userSlice";

export const store = configureStore({
  reducer: {
    meals: mealSlice,
    users: userSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
