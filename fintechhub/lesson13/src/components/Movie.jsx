import Button from "@elements/Button";

import Interstellar from "@images/movie-interstellar.png";

const InterstellarGenres = ["Драма", "Фантастика", "Приключения", "16+"];

export default function Movie() {
    return (
        <div className="text-white pl-32 pr-24 w-full h-auto">
            <div className="pl-[300px] w-full h-[560px] rounded-medium bg-light-dark flex flex-col justify-center relative">
                <img
                    src={Interstellar}
                    alt="Interstellar"
                    className="absolute left-[-5rem] top-1/2 transform -translate-y-1/2"
                />

                <h2 className="text-[2.25rem] font-semibold mb-4">
                    Интерстеллар
                    <span className="font-medium text-2xl ml-7">2014</span>
                </h2>
                <div className="mb-6 w-full flex gap-4">
                    {InterstellarGenres.map((genre) => (
                        <p
                            className="font-normal text-base text-red"
                            key={genre}
                        >
                            {genre}
                        </p>
                    ))}
                </div>
                <p className="font-normal text-base mb-7">
                    Когда засуха, пыльные бури и вымирание растений <br />{" "}
                    приводят человечество к продовольственному <br /> кризису,
                    коллектив исследователей и учёных...
                </p>
                <Button style={"self-start"}>
                    Смотреть
                </Button>
            </div>
        </div>
    );
}
