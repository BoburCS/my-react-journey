import { useState, useEffect, useRef, useReducer } from "react";
import axios from "axios"; 
import { apiReducer, initialState } from "../../reducers/apiReducer";
import LoadingSpinner from "../../components/LoadingSpinner";
import RecipeContent from "./RecipeContent/RecipeContent";
import "./Recipe.css";

const App_ID = "f724d2c4";
const App_KEY = "181b9a77d1a1c3c5c43eac5266591591";

function Recipe() {
    const [query, setQuery] = useState("");
    const searchRef = useRef();
    const [state, dispatch] = useReducer(apiReducer, initialState);

    useEffect(() => {
        async function fetchData() {
            dispatch({ type: "Loading" });
            try {
                const res = await axios.get(`https://api.edamam.com/search?q=${query}&app_id=${App_ID}&app_key=${App_KEY}`);
                dispatch({ type: "200", payload: res.data.hits });
            }
            catch(err) {
                dispatch({ type: "404", payload: `Error occured: ${err}` });
            }
        }
        fetchData();
    }, [query]);

    console.log(state.data);

    return (
        <div className="recipe-main">
            <div className="search-bar">
                <input ref={searchRef} type="text" placeholder="Search..."/>
                <button onClick={() => setQuery(searchRef.current.value)}>Search</button>
            </div>

            <section className="content-container">
                {state.loading && <LoadingSpinner />}
                {state.error && <h1>{state.error}</h1>}
                {state.success && <RecipeContent recipes={state.data}/>}
            </section>
        </div>
    );
}

export default Recipe;
