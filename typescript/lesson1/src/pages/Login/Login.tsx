import { Link, useNavigate } from "react-router-dom";
import { User } from "../../types/User.types";

type LoginProps = {
    users: User[];
    setUser: React.Dispatch<React.SetStateAction<User>>;
}

function Login({ users, setUser }: LoginProps) {
    const navigate = useNavigate();
    
    const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = Object.fromEntries(new FormData(event.target as HTMLFormElement));
        const success = users.find(user => user.email === data.email && user.password === data.password);
        if (!success) {
            alert("There is no such user");
            return;
        }
        setUser(success);
        navigate("/");
        (event.target as HTMLFormElement).reset();
    }
    
    return (
        <form onSubmit={handleLogin}>
            <input name="email" type="email" placeholder="email"/>
            <input name="password" type="password" placeholder="password"/>
            <button type="submit">Log in</button>
            <p>Don't have an account? <Link to="/signup">Signup</Link></p>
        </form>
    );
}

export default Login;
