import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    users: [
        {
            id: "100",
            userName: "Tianna",
            userEmail: "tianna@gmail.com",
            userPassword: "tianna",
        },
        {
            id: "101",
            userName: "kevin",
            userEmail: "kevin@gmail.com",
            userPassword: "kevin",
        },
        {
            id: "102",
            userName: "madison",
            userEmail: "madison@gmail.com",
            userPassword: "madison",
        },
    ],
    user: null,
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        signup: (state, action) => {
            state.users = [...state.users, action.payload];
        },
        signin: (state, action) => {
            state.user = action.payload;
        },
        signout: (state, action) => {
            state.user = null;
        },
    },
});

export const { signup, signin, signout } = userSlice.actions;
export default userSlice.reducer;
