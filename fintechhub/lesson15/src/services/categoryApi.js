import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const categoryApi = createApi({
    reducerPath: "categoryApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:5000/",
    }),
    tagTypes: ["Category"],
    endpoints: (builder) => ({
        categories: builder.query({
            query: () => "/categories",
            providesTags: ["Category"],
        }),
        addCategory: builder.mutation({
            query: (category) => ({
                url: "/categories",
                method: "POST",
                body: category,
            }),
            invalidatesTags: ["Category"],
        }),
        deleteCategory: builder.mutation({
            query: (id) => ({
                url: `/categories/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["Category"],
        }),
    }),
});

export const {
    useCategoriesQuery,
    useAddCategoryMutation,
    useDeleteCategoryMutation,
} = categoryApi;
