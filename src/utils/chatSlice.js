import { createSlice } from "@reduxjs/toolkit";
import { OFFSET_LIVE_CHAt } from "./constants";

const chatSlice = createSlice({
    name: "chat",
    initialState: {
        messages: [],
    },
    reducers : {
        addMessage: (state,action)=>{
            state.messages.splice(OFFSET_LIVE_CHAt,1);
            state.messages.push(action.payload);
        }
    }
})

export const {addMessage} = chatSlice.actions;
export default chatSlice.reducer;