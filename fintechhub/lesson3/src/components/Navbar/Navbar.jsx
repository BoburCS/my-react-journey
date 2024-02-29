import React, { useState } from "react";
import Button from "../Button/Button.jsx";
import "./Navbar.css";
import users from "../../Data/UsersData/index.js";

function Navbar() 
{
    const [name, setName] = useState("Suzy");
    const handleClick = (event) => setName(event.target.textContent);
	return (
        <nav className="navbar">
            {users.map((user, index) => <Button key={index} title = {user} handleFunction = {handleClick}/> )}  
            <h4>Name: {name}</h4>      
        </nav>
    );
}

export default Navbar;
