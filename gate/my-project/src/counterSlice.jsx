import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: "counter",
    initialState: 0,
    reducers: {
        increment: (state) => state + 1,
        decrement: (state) => state - 1,
        incrementByNumber: (state, action) => state + action.payload,
    }
});

export const { increment, decrement, incrementByNumber} = counterSlice.actions;

export default counterSlice.reducer;