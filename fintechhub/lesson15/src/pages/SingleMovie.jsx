import { useParams } from "react-router-dom";
import { useGetMovieQuery } from "../services/movieApi";

export default function SingleMovie() {
    const { id } = useParams();

    const { data: movie, isLoading, isError, isSuccess } = useGetMovieQuery(id);

    return (
        <div>
            {isLoading && <h1>Loading</h1>}
            {isError && <h1>Error occured</h1>}
            {isSuccess && (
                <div>
                    <img src={movie.image} alt={movie.name} />
                    <h1>{movie.name}</h1>
                    <p>{movie.category} {movie.genre}</p>
                </div>
            )}
        </div>
    );
}
