import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import userContext from "../../context/userContext";

function Signup() {
    const navigate = useNavigate();
    const { dispatch } = useContext(userContext);

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = Object.fromEntries(new FormData(event.target));
        const newData = {
            ...data,
            id: uuidv4(),
        };
        dispatch({ type: "SET_USERS", payload: newData })
        navigate("/signin");
        event.target.reset();
    };

    return (
        <form onSubmit={handleSubmit}>
            <input name="name" type="text" placeholder="name" required />
            <input name="email" type="email" placeholder="email" required />
            <input name="password" type="password" placeholder="password" required />
            <button type="submit">Signup</button>
        </form>
    );
}

export default Signup;
