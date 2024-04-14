import { useState, useEffect } from "react";
import axios from "axios";

export default function Movies() {
    const [movies, setMovies] = useState([]);

    async function fetchData(url) {
        try {
            await axios.get(url).then((res) => setMovies(res.data));
        } catch (err) {
            console.log(err);
        }
    }

    console.log(movies);

    const handleChange = (e) => {
        const {title,image} = JSON.parse(e.target.value)
       
    
        axios.post("http://localhost:6969/banners", {title,image})
            .then(res => console.log(res));
    };

    useEffect(() => {
        fetchData("http://localhost:6969/movies");
    }, []);

    return (
        <div className="">
            <select onChange={handleChange}>
                <option value="">Select</option>
                {movies.map((movie) => (
                    <option
                        value={JSON.stringify(movie)}
                        key={movie.id}
                    >
                        {movie.title}
                    </option>
                ))}
            </select>
        </div>
    );
}
