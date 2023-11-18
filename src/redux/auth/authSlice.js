import { createSlice } from '@reduxjs/toolkit';

const init = {
  user: {
    name: null,
    email: null,
  },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: init,
  extraReducers: builder => builder,
});

export const authReducer = authSlice.reducer;
