const initialState = {
    foods: [],
    basket: [],
};

function foodReducer (state, action) {
    switch (action.type) {
        case "Create": return {...state, foods: [...state.foods, ...action.payload]};
        case "AddBasket": {
            const chosenFood = state.foods.find(food => food.id === action.payload);
            return {...state, basket: [...state.basket, chosenFood]};
        };
        case "DeleteBasket": {
            const remainingFood = state.basket.filter(food => food.id !== action.payload);
            return {...state, basket: remainingFood};
        };
        default: return state;
    }
}

export { initialState };
export default foodReducer;
