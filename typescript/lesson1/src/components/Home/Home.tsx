type HomeProps = {
    user: {
        name: string;
        email: string;
        password: string;
        id: number;
    };
}

function Home({ user } : HomeProps) {
    return (
        <div>
            <h1>Welcome {user.name}</h1>
        </div>
    );
}

export default Home;
