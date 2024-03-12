import {createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { User } from '../models/User'
import { addUsers, deleteUser, getUsers, updateUsers } from '../services/UserService'

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
    .addCase(addUsers.fulfilled,(state,action:PayloadAction<User>)=>{
        state.loading = false;
        state.error = null;
        state.data?.push(action.payload)
    })
    .addCase(addUsers.rejected,(state)=>{
        state.loading = false ,
        state.error = "Error adding user data"
        state.data = []
    })
    .addCase(updateUsers.pending,(state)=>{
        state.loading = true;
        state.error=""
    })
    .addCase(updateUsers.fulfilled,(state,action:PayloadAction<User>)=>{
        state.loading = false;
        state.error = null;
        state.data?.push(action.payload)
    })
    .addCase(updateUsers.rejected,(state)=>{
        state.loading = false ,
        state.error = "Error update user data"
        state.data = []
    })
    .addCase(deleteUser.pending,(state)=>{
        state.loading = true;
        state.error=""
    })
    .addCase(deleteUser.fulfilled, (state, action: PayloadAction<User>) => {
        state.loading = false;
        state.error = null;
        state.data = (state.data?.filter((user) => user.id !== action.payload.id)) ?? [];
      })
    .addCase(deleteUser.rejected,(state)=>{
        state.loading = false ,
        state.error = "Error delete user data"
        state.data = []
    })
  }
})

export default userSlice.reducer