import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import ProtectedRoutes from "./routes/ProtectedRoutes";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin/Signin";
import Home from "./pages/Home";
import About from "./pages/About";
import News from "./pages/News";
import Post from "./pages/Post";
import Profile from "./pages/Profile";

function App() {
    const [users, setUsers] = useState(JSON.parse(localStorage.getItem("users")) || []);
    const [posts, setPosts] = useState(JSON.parse(localStorage.getItem("posts")) || []);
    const [token, setToken] = useState(JSON.parse(localStorage.getItem("token") || false));
    const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem("currentUser")) || null);

    useEffect(() => {
        localStorage.setItem("users", JSON.stringify(users));
        localStorage.setItem("posts", JSON.stringify(posts));
        localStorage.setItem("token", JSON.stringify(token));
        localStorage.setItem("currentUser", JSON.stringify(currentUser));
    }, [users, posts, token, currentUser]);

    return (
        <>
            <Routes>
                <Route path="/signup" element={<Signup users={users} setUsers={setUsers} setToken={setToken} setCurrentUser={setCurrentUser}/>}/>
                <Route path="/signin" element={<Signin users={users} setToken={setToken} setCurrentUser={setCurrentUser}/>}/>
                <Route element={<ProtectedRoutes token={token} setToken={setToken} currentUser={currentUser} setCurrentUser={setCurrentUser}/>}>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/news" element={<News posts={posts}/>}/>
                    <Route path="/post" element={<Post setPosts={setPosts} currentUser={currentUser}/>}/>
                    <Route path="/profile" element={<Profile currentUser={currentUser}/>}/>
                </Route>
            </Routes>
        </>
    );
}

export default App;
