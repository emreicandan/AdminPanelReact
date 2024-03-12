import { createAsyncThunk } from "@reduxjs/toolkit";
import { AddProductDto } from "../dtos/AddProductDto";
import { UpdateProductDto } from "../dtos/UpdateProductDto";

export const getProduct =  createAsyncThunk("GetProducts" , async()=>{
    const response = await fetch("https://localhost:7296/api/Products/GetAll");
    try {
        const data = await response.json();
        return data;
    } catch (error) {
        return (error);
    }
})

export const addProduct = createAsyncThunk("AddProduct",async(data:AddProductDto,{rejectWithValue} )=>{
    const response = await fetch("https://localhost:7296/api/Products/Add",{
        method:"POST",
        headers:{
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(data)
    });

    try {
        const result = await response.json();
        return result;
    } catch (error) {
        return rejectWithValue(error);
    }
})

export const updateProduct = createAsyncThunk("UpdateProduct",async(data:UpdateProductDto,{rejectWithValue} )=>{
    const response = await fetch("https://localhost:7296/api/Products/Update",{
        method:"PUT",
        headers:{
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(data)
    });

    try {
        const result = await response.json();
        return result;
    } catch (error) {
        return rejectWithValue(error);
    }
})

export const deleteProduct = createAsyncThunk("DeleteProduct", async(id:string,{rejectWithValue})=>{
    const response = await fetch(`https://localhost:7296/api/Products/DeleteById/${id}`,{
        method:"DELETE",
        headers : {
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