import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

const token = {
  set: token =>
    (axios.defaults.headers.common.Authorization = `Bearer ${token}`),
  remove: () => (axios.defaults.headers.common.Authorization = ``),
};

export const registerUser = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post('/users/signup', credentials);
      token.set(response.data.token);
      return response.data;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const loginUser = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post('/users/login', credentials);
      token.set(response.data.token);
      return response.data;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logoutUser = createAsyncThunk(
  'auth/logout',
  async (_, thunkAPI) => {
    try {
      await axios.post('/users/logout');
      token.remove();
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);
