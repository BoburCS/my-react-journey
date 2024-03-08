import { Navigate, Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

function ProtectedRoutes({token, currentUser}) {
    return token ? (
        <>
            <Navbar currentUser={currentUser}/>
            <Outlet/>
        </>
    ) : <Navigate to="/signup"/>;
}

export default ProtectedRoutes;
