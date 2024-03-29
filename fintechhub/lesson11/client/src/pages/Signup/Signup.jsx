import { Link, useNavigate } from "react-router-dom";
import { v4 as uuidv4  } from "uuid";

function Signup() {
    const navigate = useNavigate();

    const handleSignup = (event) => {
        event.preventDefault();
        const data = Object.fromEntries(new FormData(event.target));

        const newUser = { ...data, id: uuidv4() };

        fetch("http://localhost:8000/users", {method: "POST", headers: {"Content-Type": "application/json",}, body: JSON.stringify(newUser),})
            .then(res => res.json())
            .then(data => console.log("Success", data))
            .catch(err => console.log("Error", err));
        
        navigate("/signin");
        event.target.reset();
    } 

    return (
        <>
            <form onSubmit={handleSignup}>
                <input name="name" type="text" placeholder="name"/>
                <input name="email" type="email" placeholder="email"/>
                <input name="password" type="password" placeholder="password"/>
                <button type="submit">Sign Up</button>
            </form>
            <p>Already signed in? <Link to="/signin">Sign in</Link></p>
        </>
    );
}

export default Signup;
