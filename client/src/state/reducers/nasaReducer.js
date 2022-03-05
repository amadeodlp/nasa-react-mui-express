import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const nasaReducer = createSlice({
    name: "nasa",
    initialState: {
        imageData: '',
        marsData: ''
    },
    reducers: {
        setImageData(state, action) {
        state.imageData = action.payload
        },
        setMarsData(state, action) {
            state.marsData = action.payload
            },
    }
});

export const { setImageData, setMarsData } = nasaReducer.actions;

export default nasaReducer.reducer;
