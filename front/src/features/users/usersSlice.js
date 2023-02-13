import { createSlice } from "@reduxjs/toolkit"

const initialState = [
    {id:1, name: '강민' , email:'mk@kangmin.kr'},
    {id:2, name: '박성구' , email:'sgpark@corestone.co.kr'},
]

export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {}

})
export const selectAllUsers = state=>state.users
export default usersSlice.reducer