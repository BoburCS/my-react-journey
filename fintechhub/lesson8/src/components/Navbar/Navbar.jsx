import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <div>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/weather">Weather</NavLink>
            <NavLink to="/photos">Photos</NavLink>
        </div>
    );
}

export default Navbar;
