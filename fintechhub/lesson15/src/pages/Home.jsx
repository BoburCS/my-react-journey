import React from "react";
import { useDeletePostMutation, usePostsQuery } from "../services/postApi";
import { useNavigate } from "react-router-dom";

export default function Home() {
    const navigate = useNavigate();

    const { data: posts, isError, isLoading, isSuccess } = usePostsQuery();

    const handleEdit = (id) => {
        navigate(`/editpost/${id}`);
    }
    
    const [deletePost] = useDeletePostMutation();

    const handleDelte = async (id) => {
        await deletePost(id);
        
    }

    return (
        <div>
            <h1>Hello</h1>
            <div className="w-full p-5 grid grid-cols-4 gap-5">
                {isLoading && <h1>Loading...</h1>}
                {isError && <h1>Oops! could not fetch the data. try again!</h1>}
                {isSuccess
                    ? posts.map((post) => (
                          <div
                              className="bg-slate-100 flex flex-col gap-3 p-4 rounded"
                              key={post.id}
                          >
                              <h1 className="text-xl">{post.title}</h1>
                              <p>{post.content}</p>
                              <div className="self-end flex item-centers gap-2">
                                  <button onClick={() => handleDelte(post.id)}>delete</button>
                                  <button onClick={() => handleEdit(post.id)}>Edit</button>
                              </div>
                          </div>
                      ))
                    : null}
            </div>
        </div>
    );
}
