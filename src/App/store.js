import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todol/todoSlice"

export const store = configureStore({
  reducer: todoReducer
})


