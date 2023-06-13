import { createSlice } from "@reduxjs/toolkit";


const searchSlice = createSlice({
    name: "search",
    initialState : {

    },
    reducers : {
        cacheResult : (state, action) =>{
            state = {...action.payload, ...state};
        }
    }
})


export const {cacheResult} = searchSlice.actions;

export default searchSlice.reducer;