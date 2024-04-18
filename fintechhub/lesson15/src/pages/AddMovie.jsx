import { useCategoriesQuery } from "../services/categoryApi";
import { useGenresQuery } from "../services/genreApi";
import { useAddMovieMutation } from "../services/movieApi";

export default function AddMovie() {
    const { data: categories, isSuccess: cSucc } = useCategoriesQuery();
    const { data: genres, isSuccess: gSucc } = useGenresQuery();

    const [addMovie] = useAddMovieMutation();

    const handleAddMovie = async (e) => {
        e.preventDefault();
        const newMovie = Object.fromEntries(new FormData(e.target));

        await addMovie(newMovie);

        e.target.reset();
    };

    return (
        <div className="p-10 flex justify-center">
            <form
                onSubmit={handleAddMovie}
                className="max-w-[450px] flex flex-col gap-3"
            >
                <select name="category">
                    <option value="">Select</option>
                    {cSucc &&
                        categories.map((category) => (
                            <option value={category.category} key={category.id}>
                                {category.category}
                            </option>
                        ))}
                </select>

                <select name="genre">
                    <option value="">Select</option>
                    {gSucc &&
                        genres.map((genre) => (
                            <option value={genre.genre} key={genre.id}>
                                {genre.genre}
                            </option>
                        ))}
                </select>

                <input type="text" name="name" placeholder="movie name" />

                <input type="text" name="image" placeholder="movie image" />

                <button type="subimt">Add movie</button>
            </form>
        </div>
    );
}
