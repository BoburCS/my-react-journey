const initialState = {
    foods: [],
    basket: [],
    totalPrice: null,
    filteredFoods: [],
};

function foodReducer (state, action) {
    switch (action.type) {
        case "Create": {
            const newFoods = [...state.foods, ...action.payload];
            const newFilteredFoods = [...state.filteredFoods, ...action.payload];
            return {...state, foods: newFoods, filteredFoods: newFilteredFoods};
        }
        case "AddBasket": {
            const chosenFood = state.foods.find(food => food.id === action.payload);
            return {...state, basket: [...state.basket, chosenFood]};
        }
        case "DeleteBasket": {
            const remainingFood = state.basket.filter(food => food.id !== action.payload);
            return {...state, basket: remainingFood};
        }
        case "TotalPrice": {
            const total = state.basket.reduce((t, f) => t + f.price, 0);
            return {...state, totalPrice: total};
        }
        case "Filter": {
            if (action.payload === "All") {
                return {...state, filteredFoods: [...state.foods]};
            }
            return {...state, filteredFoods: state.foods.filter(food => food.category === action.payload)};   
        }
        default: return state;
    }
}

export { initialState };
export default foodReducer;
