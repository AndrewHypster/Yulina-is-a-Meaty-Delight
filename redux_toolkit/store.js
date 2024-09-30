'use client';

import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import pathReducer from "./features/path/pathSlice";

export const makeStore = () => configureStore ({
  reducer: {
    path: pathReducer,
  },
});

export const wrapper = createWrapper(makeStore)