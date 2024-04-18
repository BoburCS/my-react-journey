import { configureStore } from "@reduxjs/toolkit";
import { postApi } from "../services/postApi";
import { categoryApi } from "../services/categoryApi";
import { genreApi } from "../services/genreApi";
import { movieApi } from "../services/movieApi";

export const store = configureStore({
    reducer: {
        [postApi.reducerPath]: postApi.reducer,
        [categoryApi.reducerPath]: categoryApi.reducer,
        [genreApi.reducerPath]: genreApi.reducer,
        [movieApi.reducerPath]: movieApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(
            postApi.middleware,
            categoryApi.middleware,
            genreApi.middleware,
            movieApi.middleware
        ),
});
