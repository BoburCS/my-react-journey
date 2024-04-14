import { createSlice, nanoid } from "@reduxjs/toolkit";
import { sub } from "date-fns";

const initialState = [
    {
        id: "1",
        title: "First Post",
        content: "hello!",
        user: "100",
        date: sub(new Date(), { minutes: 10 }).toISOString(),
        reactions: { thumbsUp: 1, hooray: 0, heart: 3, rocket: 0, eyes: 0 },
    },
    {
        id: "2",
        title: "Second Post",
        content: "more text",
        user: "101",
        date: sub(new Date(), { minutes: 5 }).toISOString(),
        reactions: { thumbsUp: 0, hooray: 2, heart: 0, rocket: 0, eyes: 1 },
    },
];

const postsSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        postAdded: {
            reducer(state, action) {
                state.push(action.payload);
            },
            prepare(title, content, userId) {
                return {
                    payload: {
                        id: nanoid(),
                        date: new Date().toISOString(),
                        title,
                        content,
                        user: userId,
                        reactions: {
                            thumbsUp: 0,
                            hooray: 0,
                            heart: 0,
                            rocket: 0,
                            eyes: 0,
                        },
                    },
                };
            },
        },
        postUpdate(state, action) {
            const { id, title, content } = action.payload;
            const existingPost = state.find((post) => post.id === id);

            if (existingPost) {
                existingPost.title = title;
                existingPost.content = content;
                console.log("updated");
            }
        },
        reactionAdd(state, action) {
            const { postId, reaction } = action.payload;

            const existingPost = state.find((post) => post.id === postId);

            if (existingPost) {
                existingPost.reactions[reaction]++;
            }
        },
    },
});

export const { postAdded, postUpdate, reactionAdd } = postsSlice.actions;
export default postsSlice.reducer;
