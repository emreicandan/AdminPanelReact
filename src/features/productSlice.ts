import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Product } from "../models/Product";
import { addProduct, deleteProduct, getProduct, updateProduct } from "../services/ProductService";
import { update } from "firebase/database";

export interface ProductState {
    data : Product[] | null,
    loading : boolean,
    error : string | null
};

const initialState : ProductState = {
    data: [],
    loading: false,
    error: ""
};

const productSlice = createSlice({
    name : "product",
    initialState,
    reducers : {},
    extraReducers(builder){
        builder
        .addCase(getProduct.pending,(state)=>{
            state.loading = true;
            state.error = ""
        })
        .addCase(getProduct.fulfilled,(state,action:PayloadAction<Product[]>)=>{
            state.loading = false;
            state.data = action.payload;
            state.error = null
        })
        .addCase(getProduct.rejected,(state)=>{
            state.error = "Error fetching product data",
            state.loading = false,
            state.data = []
        })
        .addCase(addProduct.pending,(state)=>{
            state.loading = true;
            state.error = ""
        })
        .addCase(addProduct.fulfilled,(state,action:PayloadAction<Product>)=>{
            state.loading = false;
            state.data?.push(action.payload);
            state.error = null
        })
        .addCase(addProduct.rejected,(state)=>{
            state.error = "Error fetching product data",
            state.loading = false,
            state.data = []
        })
        .addCase(updateProduct.pending,(state)=>{
            state.loading = true;
            state.error = ""
        })
        .addCase(updateProduct.fulfilled,(state,action:PayloadAction<Product>)=>{
            state.loading = false;
            state.data?.push(action.payload);
            state.error = null
        })
        .addCase(updateProduct.rejected,(state)=>{
            state.error = "Error fetching product data",
            state.loading = false,
            state.data = []
        })
        .addCase(deleteProduct.pending,(state)=>{
            state.loading = true;
            state.error = ""
        })
        .addCase(deleteProduct.fulfilled,(state,action:PayloadAction<Product>)=>{
            state.loading = false;
            state.data = (state.data?.filter((user)=>user.id !== action.payload.id)) ?? [];
            state.error = null
        })
        .addCase(deleteProduct.rejected,(state)=>{
            state.error = "Error fetching product data",
            state.loading = false,
            state.data = null
        })
    }

});

export default productSlice.reducer;