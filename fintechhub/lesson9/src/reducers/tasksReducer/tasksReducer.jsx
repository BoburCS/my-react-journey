
function taskReducer(state, action)  {
    switch (action.type) {
        case "CREATE": return [...state, { ...action.payload, id: state.length + 1 }];
        case "DELETE": return state.filter(task => task.id !== action.payload);
        case "EDIT": return state.map(task => task.id === action.payload.id ? { ...task, title: action.payload.title, description: action.payload.description } : task);
        default: return state;
    }
}

export default taskReducer;
