import {createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { User } from '../models/User'
import { addUsers, getUsers } from '../services/UserService'

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


export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers(builder){
    builder
    .addCase(getUsers.pending,(state)=>{
        state.loading = true;
        state.error=""
    })
    .addCase(getUsers.fulfilled,(state,action:PayloadAction<User[]>)=>{
        state.loading = false;
        state.error = null;
        state.data = action.payload
    })
    .addCase(getUsers.rejected,(state)=>{
        state.loading = false ,
        state.error = "Error fetching user data"
        state.data = []
    })
    .addCase(addUsers.pending,(state)=>{
        state.loading = true;
        state.error=""
    })
    .addCase(addUsers.fulfilled,(state,action)=>{
        state.loading = false;
        state.error = null;
        state.data?.push(action.payload)
    })
    .addCase(addUsers.rejected,(state)=>{
        state.loading = false ,
        state.error = "Error adding user data"
        state.data = []
    })
  }
})

export default userSlice.reducer