import { createSlice } from "@reduxjs/toolkit"

const initialState = [
    {id:1,title:"첫번째 블로그 제목", content:"첫번째 블로그 내용입니다."},
    {id:2,title:"두번째 블로그 제목", content:"두번째 블로그 내용입니다."}
]

export const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        addNewPost: (state, action) => {
            state.push(action.payload)
        }
    }

})

export const selectAllPosts = state => state.posts
export const {addNewPost} = postsSlice.actions
export default postsSlice.reducer