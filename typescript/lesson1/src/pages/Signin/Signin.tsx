type User = {
    name: string;
    email: string;
    password: string;
    id: number;
}

type SigninProps = {
    users: User[];
    setUsers: React.Dispatch<React.SetStateAction<User[]>>;
}

function Signin(props: SigninProps) {
    const { users, setUsers } = props;

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = Object.fromEntries(new FormData(event.target as HTMLFormElement)) as Partial<User>;
        setUsers(prev => [...prev, {...data, id: users.length + 1} as User]);
        (event.target as HTMLFormElement).reset();        
    }

    return (
        <form onSubmit={handleSubmit}>
            <input name="name" type="text" placeholder="name"/>
            <input name="email" type="email" placeholder="email"/>
            <input name="password" type="password" placeholder="password"/>
            <button type="submit">Sign in</button>
        </form>
    );
}

export default Signin;
