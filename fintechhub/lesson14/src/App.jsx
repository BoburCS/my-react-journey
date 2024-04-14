import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import PostsList from "./components/posts/PostsList";
import SinglePostPage from "./components/posts/SinglePostPage";
import EditPostForm from "./components/posts/EditPostForm";
import Navbar from "./components/navbar/Navbar";
import Admin from "./pages/Admin";
import Movies from "./pages/Movies";

export default function App() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route exact index element={<Home />} />
                <Route exact path="/signup" element={<Signup />} />
                <Route exact path="/signin" element={<Signin />} />
                <Route exact path="/posts" element={<PostsList />} />
                <Route exact path="/posts/:postId" element={<SinglePostPage />} />
                <Route exact path="/editpost/:postId" element={<EditPostForm />} />
                <Route exact path="/admin" element={<Admin />} />
                <Route exact path="/movies" element={<Movies />} />

            </Routes>
        </>
    );
}
