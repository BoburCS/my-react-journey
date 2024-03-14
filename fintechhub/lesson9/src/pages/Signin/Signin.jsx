import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import userContext from "../../context/userContext";

function Signin() {
    const navigate = useNavigate();
    const { users, token, dispatch } = useContext(userContext);

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = Object.fromEntries(new FormData(event.target));
        const successfulUser = users.find(user => user.email === data.email && user.password === data.password);
        if (!successfulUser) {
            alert("Invalid email or password");
            return;
        }
        dispatch({ type: "SET_TOKEN", payload: !token});
        dispatch({ type: "SET_USER", payload: successfulUser });
        navigate("/");
        event.target.reset();
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input name="email" type="email" placeholder="email" required />
                <input name="password" type="password" placeholder="password" required />
                <button type="submit">Sign In</button>
            </form>

            <p>Do not have an account? <Link to="/signup">sign up</Link></p>
        </>
    );
}

export default Signin;
