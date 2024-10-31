"use client";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  id: string;
  name: string;
  lastName: string;
  contacts: {
    phone: string;
    telegram: string;
    gmail: string;
  };
}

const initialState: UserState = {
  id: JSON.parse(localStorage.getItem("persist:user"))?.id || "",
  name: JSON.parse(localStorage.getItem("persist:user"))?.name || "",
  lastName: JSON.parse(localStorage.getItem("persist:user"))?.lastName || "",
  contacts: {
    phone:
      JSON.parse(localStorage.getItem("persist:user"))?.contacts?.phone || "",
    telegram:
      JSON.parse(localStorage.getItem("persist:user"))?.contacts?.telegram ||
      "",
    gmail:
      JSON.parse(localStorage.getItem("persist:user"))?.contacts?.gmail || "",
  },
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // Дія для встановлення користувача
    setUser: (state, action: PayloadAction<UserState>) => {
      state.id = action.payload.id;
      state.name = action.payload.name;
      state.lastName = action.payload.lastName;
      state.contacts = action.payload.contacts;
    },
    // Дія для очищення користувача
    // clearUser: (state) => {
    //   state.username = "";
    //   state.email = "";
    // },
  },
});

// Експорт дій та редюсера
export const { setUser } = userSlice.actions;
export default userSlice.reducer;
