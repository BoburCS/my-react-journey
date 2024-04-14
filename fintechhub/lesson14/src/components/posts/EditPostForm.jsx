import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { postUpdate } from "../../features/posts/postSlice";

export default function EditPostForm() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { postId } = useParams();

    const post = useSelector((state) =>
        state.posts.find((post) => post.id === postId)
    );

    console.log(postId)
    console.log(post)

    const [title, setTitle] = useState(post ? post.title : "");
    const [content, setContent] = useState(post ? post.content : "");

    useEffect(() => {
        if (post) {
            setTitle(post.title);
            setContent(post.content);
        }
    }, [post]);

    const onTitleChange = (e) => setTitle(e.target.value);
    const onContentChange = (e) => setContent(e.target.value);

    const save = () => {
        if (title && content) {
            dispatch(postUpdate({ id: postId, title, content }));
            navigate("/posts");
        }
    };

    return (
        <section>
            <h2>Edit Post</h2>
            <form>
                <label htmlFor="postTitle">Post Title:</label>
                <input
                    type="text"
                    id="postTitle"
                    name="postTitle"
                    placeholder={title}
                    value={title}
                    onChange={onTitleChange}
                />
                <label htmlFor="postContent">Content:</label>
                <textarea
                    id="postContent"
                    name="postContent"
                    placeholder={content}
                    value={content}
                    onChange={onContentChange}
                />
            </form>
            <button type="button" onClick={save}>
                Save Post
            </button>
        </section>
    );
}
