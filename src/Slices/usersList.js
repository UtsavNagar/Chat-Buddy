import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name : "usersList",
    initialState :{
        value : []
    },
    reducers:{
        updateUsersList : (state,action) => {
            var data = action.payload
            state.value = data
        }
    }
});

export const {updateUsersList} = slice.actions;
export default slice.reducer