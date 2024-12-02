import { createSlice, PayloadAction } from "@reduxjs/toolkit";

let id, name, lastName, contacts, basket;
if (typeof window !== "undefined") {
  ({ id, name, lastName, contacts, basket } = JSON.parse(
    localStorage.getItem("persist:user") || "{}"
  ));
}

interface UserState {
  id: string;
  name: string;
  lastName: string;
  contacts: object;
  basket: Array<any>;
}

const initialState: UserState = {
  id,
  name,
  lastName,
  contacts,
  basket,
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
      state.basket = action.payload.basket;
    },
    addToBasket: (state, action: PayloadAction<UserState>) => {
      state.basket = [...state.basket, action.payload.basket];
    },
    deleteFromBasket: (state, action: PayloadAction<UserState>) => {
      console.log("РЕДУКС", state.basket, action.payload.basket);
      state.basket = state.basket.filter(
        (item) => item._id !== action.payload.basket._id
      );
    },
  },
});

// Експорт дій та редюсера
export const { setUser, addToBasket, deleteFromBasket } = userSlice.actions;
export default userSlice.reducer;
