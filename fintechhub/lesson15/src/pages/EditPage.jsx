import { useNavigate, useParams } from "react-router-dom";
import { useGetPostQuery, useUpdatePostMutation } from "../services/postApi";

export default function EditPage() {
    const navigate = useNavigate();
    const { id } = useParams();
    const { data: post, isSuccess } = useGetPostQuery(id);
    const [updatedPost] = useUpdatePostMutation();

    const handleUpdate = async (e) => {
        e.preventDefault();

        const upost = Object.fromEntries(new FormData(e.target));

        await updatedPost({ id, ...upost });
        navigate("/");
        e.target.reset();
    };

    return (
        <>
            {isSuccess ? (
                <form
                    className="max-w-[450px] flex flex-col gap-3"
                    onSubmit={handleUpdate}
                >
                    <input
                        defaultValue={post?.title}
                        name="title"
                        type="text"
                        placeholder="title"
                    />
                    <input
                        defaultValue={post?.content}
                        name="content"
                        type="text"
                        placeholder="content"
                    />
                    <button type="submit">Post</button>
                </form>
            ) : null}
        </>
    );
}
