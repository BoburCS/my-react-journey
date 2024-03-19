import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Profile from "./pages/Profile";
import Heros from "./pages/Heros";
import Union from "./pages/Union";
import Button from "./components/Button/Button";
import { products } from "./data/products.ts";
import Container from "./components/Container/Container.js";
import Signup from "./pages/Signup/Signup.tsx";
import Login from "./pages/Login";
import { useState } from "react";
import { User } from "./types/User.types.ts";

const UserInfo = {
    firstName: "Bruce",
    lastName: "Wayne",
    age: 20,
    isStudent: true,
}

const HerosList = [
    {name: "Xavier", type: "Mage"},
    {name: "Layla", type: "Marksman"},
    {name: "Lancelot", type: "Assasin"}
];

function App() {
    const [users, setUsers] = useState([{} as User]);
    const [user, setUser] = useState({} as User);

    return (
        <>
            <Header/>
            <Routes>
                <Route path="/" element={<Home user={user} />} />
                <Route path="/login" element={<Login users={users} setUser={setUser}/>} />
                <Route path="/signup" element={<Signup users={users} setUsers={setUsers}/>}/>
                <Route path="/profile" element={<Profile UserInfo={UserInfo}/>}/>
                <Route path="/heros" element={<Heros players={HerosList}/>}/>
                <Route path="/union" element={<Union status="success"/>}/>
                <Route path="/container" element={<Container products={products}/>}/>
            </Routes>
            <Button handleClick={(event, id) => console.log("Button is clicked", event, id)}>Click</Button>
        </>
    )
}

export default App;

// React components type is - React.ReactNode
// if data type is optional use "?" 