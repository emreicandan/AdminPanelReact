import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface User {
    id : string ,
    userName : string,
    firstName : string,
    lastName : string,
    passwordHash : string,
    passwordSalt : string,
    birthYear : number,
    identificationNumber : string,
    userClaims : []
}

export interface UserState {
    data : User[] | null ,
    loading: boolean,
    error : string | null
}

const initialState: UserState = {
  data : [],
  loading: false,
  error : ""
}

export const getUsers = createAsyncThunk("user",async()=>{
   const response = await fetch('https://localhost:7296/api/Users/GetAll')
    const data = await response.json();
    return data
})

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers(builder){
    builder
    .addCase(getUsers.pending,(state)=>{
        state.loading = true 
    })
    .addCase(getUsers.fulfilled,(state,action:PayloadAction<any>)=>{
        state.loading = false;
        state.error = null;
        state.data = action.payload
    })
    .addCase(getUsers.rejected,(state,action:PayloadAction<any>)=>{
        state.loading = false ,
        state.error = action.payload
        state.data = []
    })
  }
})

export default userSlice.reducer