import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../utils/axiosInstance";


export const login =createAsyncThunk(
    "auth/login",
    async(data)=>{
        const res=await API.post("auth/login",data)
        return res.data.user;
    }
);

const authSlice=createSlice({
    name:"auth",
    initialState:{user:null},
    extraReducers:(builder)=>{
        builder.addCase(login.fulfilled,(state,action)=>{
            state.user=action.payload;
        });

    },
});

export default authSlice.reducer
