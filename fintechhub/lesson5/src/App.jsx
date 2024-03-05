import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Admin from "./pages/admin";
import Navbar from "./components/Navbar";

function App() {
    const [isOpen, setIsOpen] = useState(false);

    const [theme, setTheme] = useState("");

    const handleTheme = () => {
        setTheme(prev => prev === "blue" ? "red" : "blue");
    }

	return (
        <>
            <Navbar isOpen={isOpen} setIsOpen={setIsOpen}/>
            <Routes>
                <Route path="/" element={<Home theme={theme}/>}/>
                <Route path="/about" element={<About handleTheme={handleTheme}/>}/>
                <Route path="/admin" element={<Admin isOpen={isOpen} setIsOpen={setIsOpen}/>}/>
            </Routes>
        </>
    );
}

export default App;
 