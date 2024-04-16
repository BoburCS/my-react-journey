import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
    reducerPath: "userApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
    tagTypes: ["User"],
    endpoints: (builder) => ({
        signup: builder.mutation({
            query: (newUser) => ({
                url: "/signup",
                method: "POST",
                body: newUser,
            }),
            invalidatesTags: ["User"],
        }),
        signin: builder.mutation({
            query: (user) => ({
                url: "/signin",
                method: "POST",
                body: user,
            }),
        }),
        signout: builder.mutation({
            query: () => ({
                url: "/signout",
                method: "POST",
            }),
        }),
    }),
});

export const { useSignupMutation, useSigninMutation, useSignoutMutation } = userApi;
