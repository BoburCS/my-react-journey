import { useContext } from "react";
import { NavLink } from "react-router-dom";
import FoodsContext from "../../context/FoodsContext";
import "./Navbar.css";

function Navbar() {
    const { state } = useContext(FoodsContext);

    return (
        <nav className="navbar">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/basket">Basket({state.basket.length})</NavLink>
        </nav>
    );
}

export default Navbar;
