import { Navigate, Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Flex from "../utilities/Flex";
import Sidebar from "../components/Sidebar";

function ProtectedRoutes({token, setToken, currentUser, setCurrentUser}) {
    return token ? (
        <>
            <Navbar setToken={setToken} currentUser={currentUser} setCurrentUser={setCurrentUser}/>
            <Flex>
                <Sidebar currentUser={currentUser}/>
                <Outlet/>
            </Flex>
        </>
    ) : <Navigate to="/signup"/>;
}

export default ProtectedRoutes;
