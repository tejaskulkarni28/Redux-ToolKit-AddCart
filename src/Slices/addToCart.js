import { createSlice } from "@reduxjs/toolkit";

// basically reducer is a function which have the initialState and the action type

// slice is a slice part of the reducers

// so lets create a slice called addToCartSlice

const addToCartSlice = createSlice(
    {
        name:"addToCartSlice",
        initialState:[],
        reducers:{
            addCartSlice(state, action){
                return action.payload
            }
        }
    }
)

// after creating a slice I need to wrap the slice into an action creator
export const {addCartSlice} = addToCartSlice.actions

// I need to export this slice to the store for reducers
export default addToCartSlice.reducer;