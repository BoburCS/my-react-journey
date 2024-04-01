import { useContext } from "react";
import Context from "../../Context/Context";

function Home() {

    const { name } = useContext(Context);

    return (
        <div className="py-5 px-20 ">
            <h1>Welcome, {name}</h1>
        </div>
    );
}

export default Home;
