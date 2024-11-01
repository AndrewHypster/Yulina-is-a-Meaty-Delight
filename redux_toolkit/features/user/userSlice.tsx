import { createSlice, PayloadAction } from "@reduxjs/toolkit";

let id, name, lastName, contacts;
if (typeof window !== "undefined") {
  ({ id, name, lastName, contacts } = JSON.parse(
    localStorage.getItem("persist:user") || "{}"
  ));
}

interface UserState {
  id: string;
  name: string;
  lastName: string;
  contacts: object;
}

const initialState: UserState = {
  id,
  name,
  lastName,
  contacts,
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
