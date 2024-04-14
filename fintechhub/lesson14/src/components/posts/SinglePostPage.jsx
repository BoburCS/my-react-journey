import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function SinglePostPage() {
    const navigate = useNavigate();

    const user = useSelector((state) => state.user.user);

    const { postId } = useParams();

    const post = useSelector((state) =>
        state.posts.find((post) => post.id === postId)
    );

    const author = useSelector((state) =>
        state.user.users.find((user) => user.id === post.user)
    );

    if (!post) {
        return (
            <section>
                <h1>Post not found!</h1>
                <button onClick={() => navigate(-1)}>Go back</button>
            </section>
        );
    }

    return (
        <section>
            <article>
                <h2>{post.title}</h2>
                <p>{post.content}</p>
                <h3>
                    author: {author.userName}{" "}
                    <span className="underline text-purple-700">
                        {author.userEmail}
                    </span>
                </h3>
                <button onClick={() => navigate(-1)}>Go back</button>
                {user?.userEmail === author?.userEmail && (
                    <button onClick={() => navigate(`/editpost/${post.id}`)}>
                        Edit
                    </button>
                )}
            </article>
        </section>
    );
}
