import { configureStore } from "@reduxjs/toolkit";
import addtocartReducer from "./cartSlice";
import productReducer from "./products";

export const store = configureStore({
    reducer: {
        addtocart: addtocartReducer,
        Product: productReducer
    }
})