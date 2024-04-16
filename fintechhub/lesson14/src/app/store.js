import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice";
import postsReducer from "../features/posts/postSlice";
import { userApi } from "../services/userApi";

export default configureStore({
    reducer: {
        user: userReducer,
        posts: postsReducer,
        [userApi.reducerPath]: userApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(userApi.middleware),
});
