import { useDispatch } from "react-redux";
import { reactionAdd } from "../../features/posts/postSlice";

const emojis = {
    thumbsUp: "👍",
    hooray: "🎉",
    heart: "❤️",
    rocket: "🚀",
    eyes: "👀",
};

export default function ReactionButtons({ postId, reactions }) {
    const dispatch = useDispatch();

    const reactionButtons = Object.entries(emojis).map(([name, emoji]) => {
        return (
            <button
                type="button"
                key={name}
                onClick={() =>
                    dispatch(reactionAdd({ postId, reaction: name }))
                }
            >
                {emoji} {reactions[name]}
            </button>
        );
    });

    return <div>{reactionButtons}</div>;
}
