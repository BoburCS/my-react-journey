import React, { useRef, useState } from "react";

function Practice() {
    const [state, setState] = useState("Siz tayyormisiz?");
    const [input, setInput] = useState(false); 
    const [name, setName] = useState(null);

    const nameRef = useRef();

    const handleClick = () => {
        setState("Ismingizni kiriting");
        if (state === "Ismingizni kiriting") setState("");
        setInput(!input);
        setName(nameRef.current.value);
    }

    return (
        <div>
            <h1>{state}</h1>
            {input && <input ref={nameRef} type="text" placeholder="your name"/>}
            {state && <button onClick={handleClick}>Next</button>}
            {name && <h1>Salom {name}</h1>}
        </div>
    );
}

export default Practice;
