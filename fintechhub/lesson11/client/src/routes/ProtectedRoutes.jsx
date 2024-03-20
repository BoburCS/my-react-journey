import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import UsersContext from "../context/usersContext";
import Navbar from "../components/Navbar";

function ProtectedRoutes() {
    const { token } = useContext(UsersContext);
    
    return token ? (
        <>
            <Navbar/>
            <Outlet/>
        </>
    ) : <Navigate to="signup"/>;
}

export default ProtectedRoutes;
