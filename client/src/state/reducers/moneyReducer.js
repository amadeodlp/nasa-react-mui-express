import { createSlice } from "@reduxjs/toolkit";

export const moneyReducer = createSlice({
    name: "money",
    initialState: {
        price: "",
        date: "",
        fulfilled: false
    },
    reducers: {
        setPrice(state, action) {
        state.price = action.payload
    },
        setDate(state, action) {
        state.date = action.payload
    },
        setFulfilled(state, action) {
        state.fulfilled = action.payload
    }
}
});

export const { setPrice, setDate, setFulfilled } = moneyReducer.actions;

export default moneyReducer.reducer;