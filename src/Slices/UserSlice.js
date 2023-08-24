import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name : "userSlice",
    initialState :{
        value : {name:undefined,token:undefined,image:undefined,isLoginStatus:false}
    },
    reducers:{
        updateUser : (state,action) => {
            var data = action.payload
            state.value = data
        }
    }
});

export const {updateUser} = slice.actions;
export default slice.reducer