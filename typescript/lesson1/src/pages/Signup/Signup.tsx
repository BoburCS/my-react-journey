import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { User } from "../../types/User.types";

type SigninProps = {
    users: User[];
    setUsers: React.Dispatch<React.SetStateAction<User[]>>;
}

function Signin({ users, setUsers }: SigninProps) {
    const navigate = useNavigate();

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = Object.fromEntries(new FormData(event.target as HTMLFormElement)) as Partial<User>;
        setUsers(prev => [...prev, {...data, id: users.length + 1} as User]);
        navigate("/login");
        (event.target as HTMLFormElement).reset();        
    }

    return (
        <form onSubmit={handleSubmit}>
            <input name="name" type="text" placeholder="name"/>
            <input name="email" type="email" placeholder="email"/>
            <input name="password" type="password" placeholder="password"/>
            <button type="submit">Sign in</button>
            <p>Already signed in? <Link to="/login">Login</Link></p>
        </form>
    );
}

export default Signin;
