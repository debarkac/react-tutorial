import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:'cart',
    //inital value of cart slice in redux store
    initialState:{
        items:[]
    },
    reducers:{
        //addItem,removeItem,clearCart is basically the action which is dispatch and the function given is the reducer function

        addItem:(state,action)=>{
            //directly modifying or mutating the state
            console.log(action.payload)
            state.items.push(action.payload);
        },
        removeItem:(state)=>{
            state.items.pop();
        },
        clearCart:(state)=>{
            // state = [];--->this will not work because we are just changing the reference to the state but we have to mutate the state
            state.items.length=0;

            //return {items:[]}--->this will work
        }
    }
})

export const {addItem,removeItem,clearCart}=cartSlice.actions;
export default cartSlice.reducer;