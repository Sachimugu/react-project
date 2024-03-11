import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
};

const openModalFunction = (state) => {
  console.log("hi");
  return { ...state, isOpen: true };
};

const closeModalFunction = (state) => {
  return { ...state, isOpen: false };
};
const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: openModalFunction,
    closeModal: closeModalFunction,
  },
});

export const { openModal, closeModal } = modalSlice.actions;

export default modalSlice.reducer;
