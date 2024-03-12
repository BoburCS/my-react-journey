import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import Context from "../../Context/Context";
import "./navbar.css";

function Navbar() {
    const { name } = useContext(Context);
    return (
        <nav className="navbar">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/weather">Weather</NavLink>
            <NavLink to="/photos">Photos</NavLink>
            <NavLink to="/video">Video</NavLink>
            <NavLink to="/reducer">Reducer</NavLink>
            <h3>User: {name}</h3>
        </nav>
    );
}

export default Navbar;
