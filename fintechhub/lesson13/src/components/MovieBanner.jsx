import Button from "@elements/Button";

import Interstellar from "@images/movie-interstellar.png";
import Play from "@icons/icon-play.svg";
import Bookmark from "@icons/icon-bookmark.svg";

const movie = {
    title: "Интерстеллар",
    date: "2014",
    time: "168min",
    type: "18+",
    country: "США",
    genres: ["Драма", "Фантастика", "Приключения"],
    desc: "Когда засуха, пыльные бури и вымирание растений приводят человечество к продовольственному кризису, коллектив исследователей и учёных отправляется сквозь червоточину...",
};

export default function MovieBanner() {
    return (
        <div className="py-20 flex items-center justify-center gap-32">
            <div className="w-[300px]">
                <img src={Interstellar} alt="Interstellar" />
            </div>
            <div className="w-[580px]">
                <h2 className="font-semibold text-3xl mb-4">{movie.title}</h2>
                <div className="font-medium text-base mb-5 flex gap-4">
                    <span>{movie.date}</span>
                    <span>{movie.time}</span>
                    <span>{movie.type}</span>
                    <span>{movie.country}</span>
                    {movie.genres.map((genre, index) => (
                        <span key={index}>{genre}</span>
                    ))}
                </div>
                <p className="break-words font-normal leading-[30px] text-base mb-9">
                    {movie.desc}
                </p>
                <div className="flex gap-7">
                    <Button style={"py-3"}>
                        Смотреть по подписке
                        <img src={Play} alt="Play Icon" />
                    </Button>
                    <Button style={"py-3"}>
                        В избранное
                        <img src={Bookmark} alt="Bookmark icon" />
                    </Button>
                </div>
            </div>
        </div>
    );
}
