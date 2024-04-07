import Button from "@elements/Button";

import RightArrow from "@icons/icon-right-sm.svg";
import GenresObj from "@data/genres";

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
                        <div key={genre.id} className="px-10 py-11 rounded-medium bg-light-dark flex items-center gap-8">
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
                <Button style={"py-4 rounded-full"}>
                    <img src={RightArrow} alt="Button Right Icon" />
                </Button>
            </div>
        </div>
    );
}
