import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Weather from "./pages/Weather";
import Counter from "./pages/Counter";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/weather" element={<Weather />} />
                <Route path="/counter" element={<Counter />} />
            </Routes>
        </>
    );
}

export default App;
