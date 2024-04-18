import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const movieApi = createApi({
    reducerPath: "movieApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:5000/",
    }),
    tagTypes: ["Movie"],
    endpoints: (builder) => ({
        movies: builder.query({
            query: () => "/movies",
            providesTags: ["Movie"],
        }),
        getMovie: builder.query({
            query: (id) => `/movies/${id}`,
            providesTags: ["Movie"],
        }),
        addMovie: builder.mutation({
            query: (movie) => ({
                url: "/movies",
                method: "POST",
                body: movie,
            }),
            invalidatesTags: ["Movie"],
        }),
    }),
});

export const { useMoviesQuery, useGetMovieQuery, useAddMovieMutation } = movieApi;
