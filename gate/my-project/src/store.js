import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./assets/useReducer/counterReducer";


const store = configureStore({
    reducer: counterReducer,
})

export default store;