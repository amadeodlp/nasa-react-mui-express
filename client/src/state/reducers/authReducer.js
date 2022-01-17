import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

const initialState = {
  token: null,
  status: ""
};

export const login = createAsyncThunk("auth/login", async (credentials) => {
  const response = await axios.post('/login', {
      headers: {
      'Content-Type': 'application/json'
      }, 
      body: JSON.stringify(credentials)
      })
  return response.data.token;
})

export const authReducer = createSlice({
    name: "auth",
    initialState: initialState,
    reducers: {
      logout: () => {
        localStorage.removeItem("token");
        return initialState;
      },
      authSuccess: (state, action) => {
        state.status = "fulfilled";
        state.token = localStorage.getItem("token");
      },
    },
    extraReducers: (builder) => {
      builder
        .addCase(login.pending, (state) => {
          state.status = "pending";
        })
        .addCase(login.fulfilled, (state, action) => {
          state.status = "fulfilled";
          state.token = action.payload;
          localStorage.setItem("token", action.payload);
        })
        .addCase(login.rejected, (state, action) => {
          state.status = "rejected";
        });
    },
  });
  
  export const { logout, authSuccess } = authReducer.actions;
  
  export default authReducer.reducer;