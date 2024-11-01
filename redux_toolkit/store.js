import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import userReducer from "./features/user/userSlice.tsx";
import pathReducer from "./features/path/pathSlice.tsx";
import modalReducer from "./features/modal-window/modalSlice.tsx";

const persistConfig = {
  key: "user",
  storage: storage, // Використовує localStorage для збереження даних
};

// Об'єднайте редюсери
const rootReducer = combineReducers({
  user: userReducer,
  path: pathReducer,
  modal: modalReducer,
});

// Створіть функцію для налаштування store
export const makeStore = () =>
  configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false, // Вимикає перевірку серіалізації для persist
      }),
  });

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
