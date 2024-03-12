import { useContext } from "react";
import Context from "../../Context/Context";

function Home() {

    const { name } = useContext(Context);

    return (
        <h1>Welcome, {name}</h1>
    );
}

export default Home;
