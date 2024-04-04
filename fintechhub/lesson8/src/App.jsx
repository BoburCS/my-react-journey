import { useState } from "react";
import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Context from "./Context/Context";
import Navbar from "./components/Navbar/Navbar";
import lazyLoad from "./functions/lazyLoad";
import ThemePage from "./pages/Theme/ThemePage.jsx";

const Home = lazyLoad("../pages/Home");
const Weather = lazy(() => wait(1000).then(() => import("./pages/Weather")));
const Photos = lazy(() => wait(1000).then(() => import("./pages/Photos")));
const Video = lazy(() => wait(1000).then(() => import("./pages/Video")));
const Reducer = lazy(() => wait(1000).then(() => import("./pages/Reducer")));

function App() {
    const [name, setName] = useState("Bobur");
    return (
        <>
            <Context.Provider value={{ name, setName }}>
                <Navbar />
                <Suspense fallback={<h1>Loading...</h1>}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/weather" element={<Weather />} />
                        <Route path="/photos" element={<Photos />} />
                        <Route path="/video" element={<Video />} />
                        <Route path="/reducer" element={<Reducer />} />
                        <Route path="/reducer" element={<Reducer />} />
                        <Route path="/theme" element={<ThemePage />} />
                    </Routes>
                </Suspense>
            </Context.Provider>
        </>
    );
}

function wait(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}

export default App;
