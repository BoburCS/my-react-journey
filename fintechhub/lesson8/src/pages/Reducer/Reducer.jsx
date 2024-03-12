import { useRef, useReducer, useContext } from "react";
import reducer from "../../reducers/numberReducer";
import Context from "../../Context/Context";

function Reducer() {
    const [state, dispatch] = useReducer(reducer, 10);
    const nameRef = useRef();

    const { setName } = useContext(Context);

    const handleClick = () => {
        setName(nameRef.current.value);
    }

    return (
        <>
            <h1>{state}</h1>
            <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
            <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
            <button onClick={() => dispatch({ type: "multiply" })}>Multiply</button>
            <button onClick={() => dispatch({ type: "divide" })}>Divide</button>
        
        
            <input ref={nameRef} type="text" placeholder="Username"/>
            <button onClick={handleClick}>Change username</button>
        </>
    );
}

export default Reducer;
