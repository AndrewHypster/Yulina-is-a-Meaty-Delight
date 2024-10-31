"use client";

import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import userReducer from "./features/user/userSlice.tsx";
import pathReducer from "./features/path/pathSlice.tsx";
import modalReducer from "./features/modal-window/modalSlice.tsx";

const persistConfig = {
  key: "user",
  storage, // Використовує localStorage для збереження даних
};

// Об'єднайте редюсери
const rootReducer = combineReducers({
  user: userReducer,
  path: pathReducer,
  modal: modalReducer,
});

// Створіть збережений редюсер
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Створіть функцію для налаштування store
export const makeStore = () =>
  configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false, // Вимикає перевірку серіалізації для persist
      }),
  });

// Створіть обгортку для Next.js з redux-persist
export const wrapper = createWrapper(makeStore);

// Створіть persistor для використання в додатку
export const persistor = persistStore(makeStore());
