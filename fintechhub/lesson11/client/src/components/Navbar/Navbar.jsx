import { useContext } from "react";
import { NavLink } from "react-router-dom";
import UsersContext from "../../context/usersContext";
import IconDua from "../../assets/icons/icon-dua.svg";
import "./navbar.css";

function Navbar() {
    
    const { setUser, setToken, basket } = useContext(UsersContext);

    const handleSignout = () => {
        setUser(null);
        setToken(false);
    }

    return (
        <nav className="navbar">
            <div className="navbar-left">
                <NavLink to="/" className="nav-home-logo">
                    <img src={IconDua} alt="Icon Dua" />
                    <h2>MyNamaz</h2>
                </NavLink>
            </div>

            <div className="navbar-right">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/namaz">Namaz</NavLink>
                <NavLink to="/products">Products</NavLink>
                <NavLink to="/basket">Basket({basket.length})</NavLink>
                <button onClick={handleSignout}>Sign Out</button>
            </div>
        </nav>
    );
}

export default Navbar;
