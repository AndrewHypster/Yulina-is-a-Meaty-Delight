'use client'

import { createSlice } from "@reduxjs/toolkit"

export interface ModalState {
  modalType: string,
  modalText: string,
}

const initialState: ModalState = {
  modalType: 'Hidden',
  modalText: '',
}

export const modalSlice = createSlice({
  name: 'modal-window',
  initialState,
  reducers: {
    setModal: (state, action) => {
      state.modalType = action.payload.type
      state.modalText = action.payload.text
    },
  }
})

export const { setModal } = modalSlice.actions
export default modalSlice.reducer