export const initialState = {
    users: [],
    user: null,
    token: false,
}

export default function reducer(state, action) {
    switch (action.type) {
        case "SET_USERS": return { ...state, users: action.payload };
        case "SET_USER": return { ...state, user: action.payload };
        case "SET_TOKEN": return { ...state, token: action.payload };
        default: return { ...state };
    }
}
