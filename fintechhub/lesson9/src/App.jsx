import { useState, useEffect, useReducer } from "react";
import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import userContext from "./context/userContext";
import taskContext from "./context/taskContext";
import reducer, { initialState } from "./reducers/usersReducer";
import ProtectedRoutes from "./routes/ProtectedRoutes/ProtectedRoutes";
import usersData from "./data/users";
import Foods from "./pages/Foods";

const Home = lazy(() => import("./pages/Home"));
const Signin = lazy(() => import("./pages/Signin"));
const Signup = lazy(() => import("./pages/Signup"));

function App() {
    const [state, dispatch] = useReducer(reducer, initialState);
    useEffect(() => dispatch({ type: "SET_USERS", payload: [ ...state.users, ...usersData ] }), []);

    const [tasks, setTasks] = useState([]);

    return (
        <userContext.Provider value={{ ...state, dispatch }}>
            <taskContext.Provider value={{ tasks, setTasks }}>
                <Suspense fallback={<h1>Loading...</h1>}>
                    <Routes>
                        <Route path="/signup" element={<Signup/>}/>
                        <Route path="/signin" element={<Signin/>}/>
                        <Route element={<ProtectedRoutes/>}>
                            <Route path="/" element={<Home/>}/>
                            <Route path="/foods" element={<Foods/>}/>
                        </Route>
                    </Routes>
                </Suspense>
            </taskContext.Provider>
        </userContext.Provider>
    );
}

export default App;
