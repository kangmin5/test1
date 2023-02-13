import {configureStore} from '@reduxjs/toolkit';
import postsSlice from '../features/posts/postsSlice';
import usersSlice from '../features/users/usersSlice';


const store = configureStore({
    reducer:{
        users:usersSlice,
        posts:postsSlice
    }
})

export default store;