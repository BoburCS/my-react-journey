import React from "react";
import "./Button.css";

function Button({ title, form, handleFunction }) {
	if (form) title = "Close";

	return <button onClick={handleFunction}> {title} </button>;
}

export default Button;
