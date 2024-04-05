import RightArrow from "../assets/icons/icon-right-sm.svg";

const GenresObj = [
    {
        id: "1",
        image: "src/assets/images/drama.png",
        title: "Драма",
        desc: "120k+ фильмов",
    },
    {
        id: "2",
        image: "src/assets/images/thriller.png",
        title: "Ужасы",
        desc: "100k+ фильмов",
    },
    {
        id: "3",
        image: "src/assets/images/detective.png",
        title: "Детективы",
        desc: "90k+ фильмов",
    },
];

export default function Genres() {
    return (
        <div className="w-full text-white font-montserrat">
            <h1 className="text-xl font-semibold mb-4">
                Смотрите фильмы, которые вам нравятся
            </h1>
            <p className="text-grey text-base font-normal mb-[60px]">
                На нашем сайте собрано огромное количество <br /> 
                фильмов и сериалов на любой вкус
            </p>

            <div className="w-full flex items-center gap-[60px]">
                <div className="grid grid-cols-3 gap-10">
                    {GenresObj.map((genre) => (
                        <div key={genre.id} className="px-10 py-11 rounded-[10px] bg-light-dark flex items-center gap-8">
                            <div className="p-5 bg-black rounded-full">
                                <img src={genre.image} alt={genre.title} />
                            </div>
                            <div className="flex flex-col gap-[10px]">
                                <h4 className="text-lg font-medium">{genre.title}</h4>
                                <p className="text-red text-base font-normal">{genre.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <button className="px-5 py-4 rounded-full bg-red">
                    <img src={RightArrow} alt="Button Right Icon" />
                </button>
            </div>
        </div>
    );
}
