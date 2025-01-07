import { createSlice } from "@reduxjs/toolkit";
import Items from "../../Components/Items";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        Items:[] 
    },
    reducers :{
        addItem: (state,action) =>{
          state.Items.push(action.payload);
        },
        removeItem: (state) => {
           state.Items.pop();
        },
        clearcart: (state) => {
          state.Items.length = 0;
        }
    }
})


export const {addItem,removeItem,clearcart} = cartSlice.actions;

export default cartSlice.reducer;