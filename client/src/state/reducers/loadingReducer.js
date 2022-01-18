import { createSlice } from "@reduxjs/toolkit";

export const loadingReducer = createSlice({
    name: "loading",
    initialState: {
    loading: true,
    },
    reducers: {
        setLoading(state, action) {
        state.loading = action.payload
    }
}
});

export const { setLoading } = loadingReducer.actions;

export default loadingReducer.reducer;
