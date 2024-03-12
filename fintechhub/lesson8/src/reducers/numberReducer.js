const reducer = (state, action) => {
    switch (action.type) {
        case "increment":
            return state = state + 1;
        case "decrement":
            return state = state - 1;
        case "multiply":
            return state = state * 2;
        case "divide":
            return state = state / 2;
        case "change":
            return state = action.payload;
        default: return state;
    }
}

export default reducer;
