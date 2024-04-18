import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import EditPage from "./pages/EditPage";
import Navbar from "./components/Navbar";
import Category from "./pages/Category";
import Genre from "./pages/Genre";
import AddMovie from "./pages/AddMovie";
import Movies from "./pages/Movies";
import SingleMovie from "./pages/SingleMovie";

export default function App() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/admin" element={<Admin />} />
                <Route path="/editpost/:id" element={<EditPage />} />
                <Route path="/category" element={<Category />} />
                <Route path="/genre" element={<Genre />} />
                <Route path="/addmovie" element={<AddMovie />} />
                <Route path="/movies" element={<Movies />} />
                <Route path="/movie/:id" element={<SingleMovie />} />
            </Routes>
        </>
    );
}

