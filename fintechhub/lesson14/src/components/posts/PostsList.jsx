import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import AddPostForm from "./AddPostForm";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";

export default function PostsList() {
    const navigate = useNavigate();

    const posts = useSelector((state) => state.posts);

    const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date));

    const renderedPosts = orderedPosts.map((post) => (
        <article className="m-2 p-3 border-2 border-black " key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            <TimeAgo timestamp={post.date} />
            <ReactionButtons postId={post.id} reactions={post.reactions} />
            <button onClick={() => navigate(`/posts/${post.id}`)}>
                See more
            </button>
        </article>
    ));

    return (
        <>
            <AddPostForm />
            <section>
                <h2>Posts</h2>
                {renderedPosts}
            </section>
        </>
    );
}
