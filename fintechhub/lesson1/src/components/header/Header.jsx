import React from "react";
import "./header.css";

function Header() {
    return (
        <header>
            <nav>
                <div className="navbar-left">
                    <h1>LOGO</h1>
                </div>
                <div className="navbar-center">
                    <ul>
                        <li><a href="/home">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/services">Services</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                </div>
                <div className="navbar-right">
                    <button>Sign up</button>
                </div>
            </nav>
        </header>
    );
}

export default Header;

