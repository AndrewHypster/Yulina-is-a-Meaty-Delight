import { createSlice } from "@reduxjs/toolkit";

export interface PathState {
  photo: string;
}

const initialState: PathState = {
  photo: "",
};

export const pathSlice = createSlice({
  name: "path",
  initialState,
  reducers: {
    setPath: (state, action) => {
      state.photo = action.payload;
    },
  },
});

export const { setPath } = pathSlice.actions;
export default pathSlice.reducer;
