import { createSlice } from '@reduxjs/toolkit';

export const popupSlice = createSlice({
  name: 'popup',
  initialState: {
    isOpen: false,
    sectionName: '',
  },
  reducers: {
    openPopup: (state, action) => {
      state.isOpen = true;
      state.sectionName = action.payload;
    },
    closePopup: (state) => {
      state.isOpen = false;
      state.sectionName = '';
    },
  },
});

export const { openPopup, closePopup } = popupSlice.actions;

export default popupSlice.reducer;
