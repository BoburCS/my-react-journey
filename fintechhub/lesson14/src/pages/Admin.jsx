import { useEffect } from "react";
import axios from "axios";

export default function Admin() {

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = Object.fromEntries(new FormData(e.target));

        axios.post("http://localhost:6969/movies", data)
            .then(res => {
                console.log(res);
                e.target.reset();
            })
            .catch(err => {
                console.error(err);
            })
    }
 
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="enter movie title"
                    name="title"
                />

                <input
                    type="text"
                    placeholder="enter movie release date"
                    name="year"
                />
                <input type="text" placeholder="enter genres" name="genres" />
                <input
                    type="text"
                    placeholder="enter movie image"
                    name="image"
                />

                <button type="submit">add movie</button>
            </form>
        </div>
    );
}
