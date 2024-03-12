import { createAsyncThunk } from "@reduxjs/toolkit";
import { AddCategoryDto } from "../dtos/AddCategoryDto";
import { UpdateCategoryDto } from "../dtos/UpdateCategoryDto";

export const getCategory = createAsyncThunk("GetCategory" , async()=>{
    const response = await fetch("https://localhost:7296/api/Categories/GetAll");
    try {
        const result = await response.json();
        return result;
    } catch (error) {
        return (error);
    }
});

export const addCategory = createAsyncThunk("AddCategory" , async(data : AddCategoryDto , {rejectWithValue})=>{
    const response = await fetch("https://localhost:7296/api/Categories/Add",{
        method : "POST",
        headers : {
            "Content-Type" : "application/json"
        },
        body : JSON.stringify(data)
    })

    try {
        const result = await response.json();
        return result;
    } catch (error) {
        return rejectWithValue(error);
    }
})

export const updateCategory = createAsyncThunk("UpdateCategory" , async(data : UpdateCategoryDto , {rejectWithValue})=>{
    const response = await fetch("https://localhost:7296/api/Categories/Update",{
        method : "PUT",
        headers : {
            "Content-Type" : "application/json"
        },
        body : JSON.stringify(data)
    })

    try {
        const result = await response.json();
        return result;
    } catch (error) {
        return rejectWithValue(error);
    }
})

export const deleteCategory = createAsyncThunk("DeleteCategory", async(id:string ,{rejectWithValue})=>{
        const response = await fetch(`https://localhost:7296/api/Categories/DeleteById/${id}`,{
            method : "DELETE",
            headers:{
                "Content-Type" : "application/json"
            }
        });
        try {
            const result = await response.json();
            return result;
        } catch (error) {
            return rejectWithValue(error);
        }
})