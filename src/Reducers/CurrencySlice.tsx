// import { createSlice } from "@reduxjs/toolkit";
//
// export const currencySlice = createSlice({
//     name: "currency",
//     initialState: {
//         value: "$",
//         label: ""
//     },
//     reducers: {
//         setCurrency: (state, action) => {
//             state.value = action.payload;
//         },
//         setCurrencyLabel: (state, action) => {
//             state.value = action.payload;
//         }
//     },
// });
//
// export const { setCurrency, setCurrencyLabel } = currencySlice.actions;
// export const selectCurrencyValue = (state: any) => state.currency.value;
// export const selectCurrencyLabel = (state) => state.currency.selectLabel;
//
// export default currencySlice.reducer;