import { useState, useEffect } from "react";
import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import axios from "axios";
import UsersContext from "./context/usersContext";
import ProtectedRoutes from "./routes/ProtectedRoutes";

const Signup = lazy(() => wait(500).then(() =>import("./pages/Signup")));
const Signin = lazy(() => wait(500).then(() => import("./pages/Signin")));
const Home = lazy(() => wait(500).then(() => import("./pages/Home")));
const Namaz = lazy(() => wait(1000).then(() => import("./pages/Namaz")));
const Products = lazy(() => wait(1000).then(() => import("./pages/Products")));
const Basket = lazy(() => wait(1000).then(() => import("./pages/Basket")));
const ProductDetail = lazy(() => wait(1000).then(() => import("./pages/ProductDetail")));

function App() {
    const [users, setUsers] = useState([]);
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")) || null);
    const [token, setToken] = useState(JSON.parse(localStorage.getItem("token")) || false);

    const [basket, setBasket] = useState([]);

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
            <UsersContext.Provider value={{ users, setUsers, user, setUser, token, setToken, basket, setBasket }}>
                <Suspense fallback={<p>Loading...</p>}>
                    <Routes>
                        <Route path="/signup" element={<Signup />} />
                        <Route path="/signin" element={<Signin />} />
                        <Route element={<ProtectedRoutes />}>
                            <Route path="/" element={<Home />} />
                            <Route path="/namaz" element={<Namaz />} />
                            <Route path="/products" element={<Products />} />
                            <Route path="/basket" element={<Basket />} />
                            <Route path="/products/:id" element={<ProductDetail />} />
                        </Route>
                    </Routes>
                </Suspense>
            </UsersContext.Provider>
        </>
    );
}

function wait(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}

export default App;
