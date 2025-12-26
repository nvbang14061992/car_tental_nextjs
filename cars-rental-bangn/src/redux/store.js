import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./usersSlice";
import loadsReducer from "./loadersSlice";

const store = configureStore({
  reducer: {
    users: usersReducer,
    loaders: loadsReducer,
  },
});

export default store;
