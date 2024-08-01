import { configureStore } from "@reduxjs/toolkit";
// import currencyReducer from "../Reducers/CurrencySlice";

export const store = configureStore({
    reducer: {
        // currency: currencyReducer,
    },
});