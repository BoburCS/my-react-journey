import { useReducer } from "react";

type CounterState = {
    count: number;
}

type CounterUpdate = {
    type: "increment" | "decrement";
    payload: number;
}

type CounterReset = {
    type: "reset";
}

type CounterAction = CounterUpdate | CounterReset;

const initialState = { count: 0 };

const reducer = (state: CounterState, action: CounterAction) => {
    switch(action.type) {
        case "increment": return { count: state.count + action.payload };
        case "decrement": return { count: state.count - action.payload };
        case "reset": return initialState;
        default: return state;
    }
}

function Counter() {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            
            <h1>{state.count}</h1>

            <div>
                <button onClick={() => dispatch({ type: "increment", payload: 10 })}>Increment</button>
                <button onClick={() => dispatch({ type: "decrement", payload: 10 })}>Decrement</button>
                <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
            </div>

        </div>
    );
}

export default Counter;
