import { useContext } from "react";
import { NavLink } from "react-router-dom";
import UsersContext from "../../context/usersContext";

function Navbar() {

    const { setUser, setToken } = useContext(UsersContext);

    const handleSignout = () => {
        setUser(null);
        setToken(false);
    }

    return (
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/namaz">Namaz</NavLink>

            <button onClick={handleSignout}>Sign Out</button>
        </nav>
    );
}

export default Navbar;
