import { createSlice } from "@reduxjs/toolkit";

export const modalReducer = createSlice({
    name: "modal",
    initialState: {
    open: false,
    message: ""
    },
    reducers: {
        setModal(state, action) {
        state.open = action.payload
    },
        setMessage(state, action) {
        state.message = action.payload
    }
}
});

export const { setModal, setMessage } = modalReducer.actions;

export default modalReducer.reducer;