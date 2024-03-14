import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import userContext from "../../context/userContext";
import Navbar from "../../components/Navbar";

function ProtectedRoutes() {
    const { token } = useContext(userContext);
    return token ? (
        <>
            <Navbar/>
            <Outlet/>
        </>
    ) : <Navigate to="/signup"/>;
}

export default ProtectedRoutes;
