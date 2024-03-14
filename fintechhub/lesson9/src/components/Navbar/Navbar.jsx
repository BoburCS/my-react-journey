import { useContext } from "react";
import { NavLink } from "react-router-dom";
import userContext from "../../context/userContext";

function Navbar() {
    const { user } = useContext(userContext);
    return (
        <nav>
            <NavLink to="/">Home</NavLink>
            <p>Welcome {user?.name}!</p>
        </nav>
    );
}

export default Navbar;
