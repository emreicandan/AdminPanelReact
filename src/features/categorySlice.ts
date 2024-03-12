import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Category } from "../models/Category";
import { addCategory, deleteCategory, getCategory, updateCategory } from "../services/CategoryService";


export interface CategoryState {
    data : Category[] | null,
    loading : boolean,
    error : string | null
}

const initialState : CategoryState = {
    data: [],
    loading: false,
    error: ""
}

const categorySlice = createSlice({
    name : "category",
    initialState,
    reducers : {},
    extraReducers(builder){
        builder
        .addCase(getCategory.pending,(state)=>{
            state.loading = true,
            state.error = ""
        })
        .addCase(getCategory.fulfilled,(state , action:PayloadAction<Category[]>)=>{
            state.loading = false,
            state.error = null,
            state.data = action.payload
        })
        .addCase(getCategory.rejected,(state)=>{
            state.error="Error fetching category data",
            state.data = [],
            state.loading = false
        })
        .addCase(addCategory.pending,(state)=>{
            state.loading = true,
            state.error = ""
        })
        .addCase(addCategory.fulfilled,(state , action:PayloadAction<Category[]>)=>{
            state.loading = false,
            state.error = null,
            state.data = action.payload
        })
        .addCase(addCategory.rejected,(state)=>{
            state.error="Error fetching category data",
            state.data = [],
            state.loading = false
        })
        .addCase(updateCategory.pending,(state)=>{
            state.loading = true,
            state.error = ""
        })
        .addCase(updateCategory.fulfilled,(state , action:PayloadAction<Category[]>)=>{
            state.loading = false,
            state.error = null,
            state.data = action.payload
        })
        .addCase(updateCategory.rejected,(state)=>{
            state.error="Error fetching category data",
            state.data = [],
            state.loading = false
        })
        .addCase(deleteCategory.pending,(state)=>{
            state.loading = true,
            state.error = ""
        })
        .addCase(deleteCategory.fulfilled,(state , action:PayloadAction<Category>)=>{
            state.loading = false,
            state.error = null,
            state.data = (state.data?.filter((category) => category.id !== action.payload.id))?? []
        })
        .addCase(deleteCategory.rejected,(state)=>{
            state.error="Error fetching category data",
            state.loading = false
        })
    }
})

export default categorySlice.reducer;