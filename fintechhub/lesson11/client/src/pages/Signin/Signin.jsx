import { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import UsersContext from "../../context/usersContext";

function Signin() {
    const [users, setUsers] = useState([]);
    const { setUser, setToken } = useContext(UsersContext);
    const navigate = useNavigate();

    async function fetchData () {
        try {
            const res = await axios.get("http://localhost:8000/users");
            setUsers(res.data.users);
            console.log(res.data.users);
        }
        catch (err) {
            console.log(err);
        }
    } 

    useEffect(() => {
        fetchData();
    }, []);

    const handleSignin = (event) => {
        event.preventDefault();
        const data = Object.fromEntries(new FormData(event.target));

        const success = users.find(user => user.email === data.email && user.password === data.password);
        if (!success) {
            alert("There is no such account.");
            return;
        }
        
        setToken(true);
        setUser(success);
        navigate("/");
        event.target.reset();
    }

    return (
        <>
            <form onSubmit={handleSignin}>
                <input name="email" type="email" placeholder="email"/>
                <input name="password" type="password" placeholder="password"/>
                <button type="submit">Sign In</button>
            </form>
            <p>Do not have an account? <Link to="/signup">Sign Up</Link></p>
        </>
    );
}

export default Signin;
