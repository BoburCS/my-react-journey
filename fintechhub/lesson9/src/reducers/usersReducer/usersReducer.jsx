export const initialState = {
    users: JSON.parse(localStorage.getItem("users")) || [],
    user: JSON.parse(localStorage.getItem("user")) || null,
    token: JSON.parse(localStorage.getItem("token")) || false,
}

export default function reducer(state, action) {
    switch (action.type) {
        case "SET_USERS": return { ...state, users: [...state.users, action.payload] };
        case "SET_USER": return { ...state, user: action.payload };
        case "SET_TOKEN": return { ...state, token: action.payload };
        default: return { ...state };
    }
}
