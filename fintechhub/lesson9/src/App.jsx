import { useEffect, useReducer } from "react";
import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import userContext from "./context/userContext";
import reducer, { initialState } from "./reducers/usersReducer";
import ProtectedRoutes from "./routes/ProtectedRoutes/ProtectedRoutes";

const Home = lazy(() => import("./pages/Home"));
const Signin = lazy(() => import("./pages/Signin"));
const Signup = lazy(() => import("./pages/Signup"));

import usersData from "./data/users";

function App() {
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => dispatch({ type: "SET_USERS", payload: [...state.users, usersData] }));

    useEffect(() => {
        localStorage.setItem("users", JSON.stringify(state.users));
        localStorage.setItem("user", JSON.stringify(state.user));
        localStorage.setItem("token", JSON.stringify(state.token));
    }, [state]);

    return (
        <userContext.Provider value={{ ...state, dispatch }}>
            <Suspense fallback={<h1>Loading...</h1>}>
                <Routes>
                    <Route path="/signup" element={<Signup/>}/>
                    <Route path="/signin" element={<Signin/>}/>
                    <Route element={<ProtectedRoutes/>}>
                        <Route path="/" element={<Home/>}/>
                    </Route>
                </Routes>
            </Suspense>
        </userContext.Provider>
    );
}

export default App;
