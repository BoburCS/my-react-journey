import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { postAdded } from "../../features/posts/postSlice";
import { useNavigate } from "react-router-dom";

export default function AddPostForm() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const user = useSelector(state => state.user.user);

    const onTitleChange = (e) => setTitle(e.target.value);
    const onContentChange = (e) => setContent(e.target.value);

    const save = () => {
        if (!user) {
            alert("You should log in to post posts");
            navigate("/signin");
            return;
        }        

        if (title && content) {
            dispatch(postAdded(title, content, user.id));
            setTitle("");
            setContent("");
        }
    };

    return (
        <section>
            <h2>Add New Post</h2>

            <form>
                <label htmlFor="postTitle">Post Title: </label>
                <input
                    type="text"
                    id="postTitle"
                    name="postTitle"
                    value={title}
                    onChange={onTitleChange}
                />

                <label htmlFor="postContent">Post Content: </label>
                <textarea
                    id="postContent"
                    name="postContent"
                    value={content}
                    onChange={onContentChange}
                />
                <button type="button" onClick={save}>
                    Save Post
                </button>
            </form>
        </section>
    );
}
