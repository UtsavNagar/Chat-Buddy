import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./UserSlice"
import postList from "./postList";
import usersList from "./usersList";
import spesificUser from "./spesificUser";

const store = configureStore({
    reducer:{
        userInfo:userSlice,
        postList : postList,
        usersList : usersList,
        spesificUser : spesificUser
    }
})

export default store