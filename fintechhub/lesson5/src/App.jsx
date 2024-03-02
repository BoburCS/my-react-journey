import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Admin from "./pages/admin";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
	return (
        <>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/admin" element={<Admin/>}/>
            </Routes>
            <Footer/>
        </>
    );
}

export default App;
