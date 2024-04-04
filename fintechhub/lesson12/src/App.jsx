import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import NotFound from "./pages/NotFound";
import TabPanel from "./pages/TabPanel";

export default function App() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/admin" element={<Admin />} />
                <Route path="*" element={<NotFound />} />
                <Route path="/tabpanel" element={<TabPanel/>} />
            </Routes>
        </>
    );
}
