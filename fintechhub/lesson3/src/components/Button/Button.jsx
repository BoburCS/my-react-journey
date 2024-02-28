import React from "react";

function Button ({ content, handleClick }) 
{
	return (
        <>
            <button onClick={handleClick} className="font-bold border-solid border-slate-900">{content}</button>
        </>
    );
}

export default Button;
