import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

//creating the store
const appStore=configureStore({
    //the reducer here is responsible for modifing the appStore and it has small reducers inside it
    //this is one big reducer for the whole appStore which can have multiple small reducers inside it
    //slice can have multiple reducers
    reducer:{
        cart:cartReducer,
    },
})

export default appStore;