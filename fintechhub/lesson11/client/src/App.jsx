import { useState, useEffect } from "react";
import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import axios from "axios";
import UsersContext from "./context/usersContext";
import ProtectedRoutes from "./routes/ProtectedRoutes";

const Signup = lazy(() => import("./pages/Signup"));
const Signin = lazy(() => import("./pages/Signin"));
const Home = lazy(() => import("./pages/Home"));
const Namaz = lazy(() => import("./pages/Namaz"));

function App() {
    const [users, setUsers] = useState([]);
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")) || null);
    const [token, setToken] = useState(JSON.parse(localStorage.getItem("token")) || false);

    async function fetchData () {
        try {
            const res = await axios.get("http://localhost:5000/users");
            setUsers(res.data.users);
        }
        catch (err) {
            console.log(err);
        }
    } 

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(user));
        localStorage.setItem("token", JSON.stringify(token));
    }, [user, token]);

    return (
        <>
            <UsersContext.Provider value={{ users, setUsers, user, setUser, token, setToken }}>
                <Suspense fallback={<p>Loading...</p>}>
                    <Routes>
                        <Route path="/signup" element={<Signup />} />
                        <Route path="/signin" element={<Signin />} />
                        <Route element={<ProtectedRoutes />}>
                            <Route path="/" element={<Home />} />
                            <Route path="/namaz" element={<Namaz />} />
                        </Route>
                    </Routes>
                </Suspense>
            </UsersContext.Provider>
        </>
    );
}

export default App;
