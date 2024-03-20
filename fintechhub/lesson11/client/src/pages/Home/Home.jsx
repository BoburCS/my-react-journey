import { useContext } from "react";
import UsersContext from "../../context/usersContext";

function Home() {
    const { user } = useContext(UsersContext);

    return (
        <div>
            Welcome {user?.name}
        </div>
    );
}

export default Home;
