import { useEffect, useReducer } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Basket from "./pages/Basket";
import Practice from "./pages/Practice";
import FoodsContext from "./context/FoodsContext";
import foodReducer, { initialState } from "./reducers/foodReducer";
import Navbar from "./components/Navbar";
import Foods from "./data/foods";
import Restapi from "./pages/restapi/Restapi";
import Products from "./pages/Products/Products";

function App() {
    const [state, dispatch] = useReducer(foodReducer, initialState);

    useEffect(() => dispatch({ type: "Create", payload: Foods}), []);

    return (
        <FoodsContext.Provider value={{ state, dispatch }}>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/basket" element={<Basket />} />
                <Route path="/reserve" element={<Practice/>}/>
                <Route path="/restapi" element={<Restapi/>}/>
                <Route path="/product/:id" element={<Products/>}/>
            </Routes>
        </FoodsContext.Provider>
    );
}

export default App;
