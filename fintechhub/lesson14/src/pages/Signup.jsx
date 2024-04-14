import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { nanoid } from "nanoid";
import { signup } from "../features/userSlice";

export default function Signup() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSignup = (event) => {
        event.preventDefault();
        const data = Object.fromEntries(new FormData(event.target));
        const newUser = { ...data, id: nanoid(5) };
        dispatch(signup(newUser));
        navigate("/signin");
        event.target.reset();
    }

    return (
        <div className="py-5 w-full flex justify-center items-center">
            <form onSubmit={handleSignup} className="flex flex-col p-3 gap-3 border border-black">
                <input name="userName" type="text" placeholder="name" />
                <input name="userEmail" type="email" placeholder="email" />
                <input name="userPassword" type="password" placeholder="password" />
                <p>Already signed in? <Link to="/signin">Signin</Link></p>
                <button type="submit">Signup</button>
            </form>
        </div>
    );
}
