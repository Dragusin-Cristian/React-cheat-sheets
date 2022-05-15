import { createSlice } from '@reduxjs/toolkit';

const uiSlice = createSlice({
  name: 'ui',
  initialState: { cartIsVisible: false, showNotification: null },
  reducers: {
    toggle(state) {
      state.cartIsVisible = !state.cartIsVisible;
    },
    showNotification(state, action) {
      state.showNotification = {
        status: action.payload.status,
        title: action.payload.message,
        message: action.payload.message
      }
    }
  }
});

export const uiActions = uiSlice.actions;

export default uiSlice;