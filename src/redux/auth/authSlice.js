import { createSlice } from '@reduxjs/toolkit';
import { loginUser, logoutUser, registerUser } from './operations';

const init = {
  user: {
    name: null,
    email: null,
  },
  token: null,
  isLoggedIn: true,
  isRefreshing: false,
  isLoading: false,
  error: null,
};

const handlePending = state => {
  state.isLoading = true;
};

const handleError = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const authSlice = createSlice({
  name: 'auth',
  initialState: init,
  extraReducers: builder =>
    builder
      .addCase(registerUser.pending, handlePending)
      .addCase(registerUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(registerUser.rejected, handleError)
      .addCase(loginUser.pending, handlePending)
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(loginUser.rejected, handleError)
      .addCase(logoutUser.pending, handlePending)
      .addCase(logoutUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(logoutUser.rejected, handleError),
});

export const authReducer = authSlice.reducer;
