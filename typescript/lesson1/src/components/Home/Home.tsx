type HomeProps = {
    name: string;
}

function Home(props : HomeProps) {
    return (
        <div>
            <h1>Welcome {props.name}</h1>
        </div>
    );
}

export default Home;
