'use client'

import { createSlice } from "@reduxjs/toolkit"

export interface UserState {
  isAutorise: boolean
}

const initialState: UserState = {
  isAutorise: false
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setState: (state, action) => { state.isAutorise = action.payload},
  }
})

export const { setState } = userSlice.actions
export default userSlice.reducer