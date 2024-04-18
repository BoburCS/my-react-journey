import React from "react";
import {
    useAddCategoryMutation,
    useCategoriesQuery,
    useDeleteCategoryMutation,
} from "../services/categoryApi";

export default function Category() {
    const [addCategory] = useAddCategoryMutation();
    const [deleteCategory] = useDeleteCategoryMutation();

    const {
        data: categories,
        isLoading,
        isError,
        isSuccess,
    } = useCategoriesQuery();
    const handleAdd = async (e) => {
        e.preventDefault();

        const newCategory = Object.fromEntries(new FormData(e.target));

        await addCategory(newCategory);

        e.target.reset();
    };
    
    const handleDelete = async (id) => {
        await deleteCategory(id);
    }

    return (
        <div className="p-10">
            <form onSubmit={handleAdd}>
                <input
                    type="text"
                    placeholder="category name"
                    name="category"
                />
            </form>

            <div>
                {isLoading && <h1>Loading...</h1>}
                {isError && <h1>oops error occured</h1>}
                {isSuccess && (
                    <div className="flex flex-col gap-5">
                        {categories.map((category) => (
                            <div className="flex items-center gap-5" key={category.id}>
                                <h1>{category.category}</h1>
                                <button
                                    onClick={() => handleDelete(category.id)}
                                >
                                    Delete
                                </button>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
