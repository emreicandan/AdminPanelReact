import { createAsyncThunk } from "@reduxjs/toolkit";
import { AddUserDto } from "../models/User";

export const addUsers = createAsyncThunk("AddUsers",async(data : AddUserDto, {rejectWithValue})=>{
    const response = await fetch("https://localhost:7296/api/Users/Add",{
        method:"POST",
        headers: {
            "Content-Type" : "application/json",
        },
        body : JSON.stringify(data)
    });

    try {
        const result = await response.json();
        return result;
    } catch (error) {
        return rejectWithValue(error);
    }
})

export const getUsers = createAsyncThunk("GetUser",async()=>{
   const response = await fetch('https://localhost:7296/api/Users/GetAll')
    const data = await response.json();
    return data
})
