import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { signin } from "../features/userSlice";

export default function Signin() {  
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const users = useSelector(state => state.user.users);
    
    const handleSignin = (event) => {
        event.preventDefault();

        const data = Object.fromEntries(new FormData(event.target));
        let success = users.find(user => user.userEmail === data.userEmail && user.userPassword === data.userPassword);

        if (!success) {
            alert("There is no such user!");
            return;
        }

        dispatch(signin(success));
        navigate("/");

        event.target.reset();
    }

    return (
        <div className="py-5 w-full flex justify-center items-center">
            <form onSubmit={handleSignin} className="flex flex-col gap-3 p-3 border border-black">
                <input name="userEmail" type="email" placeholder="email" />
                <input name="userPassword" type="password" placeholder="password" />
                <p>Do not have an acc? <Link to="/signup">Signup</Link> </p>
                <button type="submit">Signin</button>
            </form>
        </div>
    );
}
