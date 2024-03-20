import { useState, useEffect } from "react";
import axios from "axios";

function App() {
    const [users, setUsers] = useState([]);

    async function fetchData() {
        try {
            const response = await axios.get("http://localhost:5000/home");
            setUsers(response.data.users);  
        }   
        catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        fetchData();
    }, []); 

    return (
        <div>
            {users.length > 0 ? (
                users.map(user => (
                    <h1 key={user}>{user}</h1>
                ))
            ) : <p>No data</p>}
        </div>
    );
}

export default App;
