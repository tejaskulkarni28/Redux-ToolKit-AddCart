import { combineReducers, configureStore } from "@reduxjs/toolkit";
import addToCartSlice from "./Slices/addToCart";


export const store = configureStore({
    reducer:{
        addToCartSlice
    }
})