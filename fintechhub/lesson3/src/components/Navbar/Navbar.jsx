import React, { useState } from "react";
import Button from "../Button/Button.jsx";

function Navbar () 
{
    const [form, setForm] = useState(true);

    const showForm = () => setForm(previousForm => !previousForm);

	return (
        <nav className="px-[100px] py-4 bg-green-500 flex justify-between">
            <h1>Lesson3</h1>
            <Button content={"Log In"} handleClick={showForm} />
        </nav>
    );
}

export default Navbar;
