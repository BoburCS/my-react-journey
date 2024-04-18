import {
    useAddGenreMutation,
    useDeleteGenreMutation,
    useGenresQuery,
} from "../services/genreApi";

export default function Genre() {
    const [addGenre] = useAddGenreMutation();
    const [deleteGenre] = useDeleteGenreMutation();
    const { data: genres, isLoading, isError, isSuccess } = useGenresQuery();

    const handleAdd = async (e) => {
        e.preventDefault();

        const newGenre = Object.fromEntries(new FormData(e.target));

        await addGenre(newGenre);

        e.target.reset();
    };

    const handleDelete = async (id) => {
        await deleteGenre(id);
    };

    return (
        <div className="p-10">
            <form onSubmit={handleAdd}>
                <input type="text" placeholder="genre name" name="genre" />
            </form>

            <div className="flex flex-col gap-5">
                {isLoading && <h1>Loading...</h1>}
                {isError && <h1>oops error occured</h1>}
                {isSuccess && (
                    <div>
                        {genres.map((genre) => (
                            <div
                                className="flex items-center gap-5"
                                key={genre.id}
                            >
                                <h1>{genre.genre}</h1>
                                <button onClick={() => handleDelete(genre.id)}>
                                    delete
                                </button>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
