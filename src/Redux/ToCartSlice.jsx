import { createSlice } from "@reduxjs/toolkit"

const initialState={
    cart:[]
}
const ToCartSlice=createSlice({
    name:"cart",
    initialState,
    reducers:{
        addCartItem:(state,action)=>{
            state.push(action.payload)
        }
    }
})