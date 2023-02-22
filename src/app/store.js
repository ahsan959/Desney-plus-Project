import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import moviewReducer from "../features/movies/movieSlice";
import userSlice from "../features/users/userSlice";
import userReducer from "../features/users/userSlice";

export const store = configureStore({
  reducer: {
    movie: moviewReducer,
    user: userSlice,
  },
});
