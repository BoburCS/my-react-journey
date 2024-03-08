import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import ProtectedRoutes from "./routes/ProtectedRoutes";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin/Signin";
import Home from "./pages/Home";
import usersData from "./data/users";

function App() {
    const [users, setUsers] = useState(usersData);
    const [token, setToken] = useState(false);
    const [currentUser, setCurrentUser] = useState(null);

    return (
        <>
            <Routes>
                <Route path="/signup" element={<Signup setUsers={setUsers} setToken={setToken} setCurrentUser={setCurrentUser}/>}/>
                <Route path="/signin" element={<Signin users={users} setToken={setToken} setCurrentUser={setCurrentUser}/>}/>
                <Route element={<ProtectedRoutes token={token} currentUser={currentUser}/>}>
                    <Route path="/" element={<Home/>}/>
                </Route>
            </Routes>
        </>
    );
}

export default App;
