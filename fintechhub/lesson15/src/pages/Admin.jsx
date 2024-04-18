import { useAddPostMutation } from "../services/postApi";

export default function Admin() {
    const [addPost] = useAddPostMutation();

    const handlePost = async (e) => {
        e.preventDefault();
        const newPost = Object.fromEntries(new FormData(e.target));

        await addPost(newPost);

        e.target.reset();
    }
    return (
        <>
            <form className="max-w-[450px] flex flex-col gap-3" onSubmit={handlePost}>
                <input name="title" type="text" placeholder="title"/>
                <input name="content" type="text" placeholder="content"/>
                <button type="submit">Post</button>
            </form>
        </>
    );
}
