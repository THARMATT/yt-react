import { createSlice } from "@reduxjs/toolkit";

const searchSlice=createSlice({
    name:"search",
    initialState:[],
    reducers:{
channelResult:(state,action)=>{
state={...action.payload,...state}
}
    }
})
export const { channelResult }=searchSlice.actions
export default searchSlice.reducer