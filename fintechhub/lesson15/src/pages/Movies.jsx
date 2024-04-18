import { useNavigate } from "react-router-dom";
import { useMoviesQuery } from "../services/movieApi";

export default function Movies() {
    const navigate = useNavigate();
    const { data: movies, isLoading, isError, isSuccess } = useMoviesQuery();
    const handleNavigate = (id) => {
        navigate(`/movie/${id}`);
    };

    return (
        <div className="p-10">
            <h1>Movies</h1>

            <div className="">
                {isLoading && (
                    <div className="absoulte w-full h-screen flex items-center justify-center">
                        <h1 className="text-4xl">LOADING</h1>
                    </div>
                )}
                {isError && <h1>Oops error occured try again</h1>}
                {isSuccess && (
                    <div className="w-full px-10 py-5 h-auto grid grid-cols-3 gap-5">
                        {movies.map((movie) => (
                            <div className="flex flex-col" key={movie.id}>
                                <img src={movie.image} alt={movie.name} />
                                <h1>{movie.name}</h1>
                                <button
                                    onClick={() => handleNavigate(movie.id)}
                                >
                                    see more
                                </button>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
