'use client';

import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import pathReducer from "./features/path/pathSlice";
import modalReducer from "./features/modal-window/modalSlice";

export const makeStore = () => configureStore ({
  reducer: {
    path: pathReducer,
    modal: modalReducer,
  },
});

export const wrapper = createWrapper(makeStore)