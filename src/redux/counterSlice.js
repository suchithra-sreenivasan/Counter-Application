import { createSlice } from "@reduxjs/toolkit";



// createSlice() = returns automatically reducer as well as action
export const counterSlice = createSlice({
    name:'counter',
    initialState:{
        value:0
    },
    // action to perfrom
    reducers:{
        increment : (state)=>{
            state.value+=1
        },
        decrement : (state)=>{
            state.value-=1
        },
        reset : (state)=>{
            state.value=0
        },
        changeRange : (state, action)=>{
            state.value += action.payload
        }
    }

})

// action are need to component
export const {increment , decrement , reset, changeRange } = counterSlice.actions

//reducer are need to store to update state
export default counterSlice.reducer