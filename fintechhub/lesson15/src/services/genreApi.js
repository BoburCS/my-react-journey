import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const genreApi = createApi({
    reducerPath: "genreApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:5000/",
    }),
    tagTypes: ["Genre"],
    endpoints: (builder) => ({
        genres: builder.query({
            query: () => "/genres",
            providesTags: ["Genre"],
        }),
        addGenre: builder.mutation({
            query: (genre) => ({
                url: "/genres",
                method: "POST",
                body: genre,
            }),
            invalidatesTags: ["Genre"],
        }),
        deleteGenre: builder.mutation({
            query: (id) => ({
                url: `/genres/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["Genre"],
        }),
    }),
});

export const { 
    useGenresQuery, 
    useAddGenreMutation, 
    useDeleteGenreMutation 
} = genreApi;
