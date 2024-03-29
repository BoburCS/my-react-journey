export const initialState = {
    loading: false,
    success: false,
    error: "",
    data: null,
};

export const apiReducer = (state, action) => {
    switch(action.type) {
        case "Loading": return {
            ...state,
            loading: true
        };
        case "404": return {
            loading: false,
            success: false,
            error: action.payload,
            data: null
        };
        case "200": return {
            loading: false,
            success: true,
            error: "",
            data: action.payload
        };
        default: return state;
    }
}
