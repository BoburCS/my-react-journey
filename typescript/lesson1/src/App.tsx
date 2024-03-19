import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Profile from "./pages/Profile";
import Heros from "./pages/Heros";
import Union from "./pages/Union";
import Button from "./components/Button/Button";
import { products } from "./data/products.ts";
import Container from "./components/Container/Container.js";
import Signin from "./pages/Signin/Signin.tsx";
import { useState } from "react";

const User = {
    name: "Bobur",
    age: 19,
    isMarried: false
}

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
    const [users, setUsers] = useState([{name: "Bobur", email: "bob@gmail.com", password: "1", id: 1}]);
    return (
        <>
            <Header User={User}/>
            <Routes>
                <Route path="/" element={<Home name={"Bobur"} />} />
                <Route path="/signin" element={<Signin users={users} setUsers={setUsers}/>}/>
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