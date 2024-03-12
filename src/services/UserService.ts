import { createAsyncThunk } from "@reduxjs/toolkit";
import { AddUserDto } from "../dtos/AddUserDto";
import { UpdateUserDto } from "../dtos/UpdateUserDto";



export const addUsers = createAsyncThunk("AddUser",async(data : AddUserDto, {rejectWithValue})=>{
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

export const updateUsers = createAsyncThunk("UpdateUser",async(data : UpdateUserDto, {rejectWithValue})=>{
    const response = await fetch("https://localhost:7296/api/Users/Update",{
        method:"PUT",
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

export const getUsers = createAsyncThunk("GetUsers",async()=>{
   const response = await fetch('https://localhost:7296/api/Users/GetAll')
    const data = await response.json();
    return data
})

export const deleteUser = createAsyncThunk("DeleteUser",async( id : string , {rejectWithValue})=>{
    const response = await fetch(`https://localhost:7296/api/Users/DeleteById/${id}`,{
        method:"DELETE",
        headers: {
            "Content-Type" : "application/json",
        }
    });

    try {
        const result = await response.json();
        return result;
    } catch (error) {
        return rejectWithValue(error);
    }
})
