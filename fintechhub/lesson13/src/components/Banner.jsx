import Play from "../assets/icons/icon-play.svg";
import RightArrow from "../assets/icons/icon-right.svg";

const Banners = [
    { id: "1", active: true },
    { id: "2", active: false },
    { id: "3", active: false },
    { id: "4", active: false },
];

export default function Banner() {
    return (
        <div className="px-12 py-32 flex items-center justify-between">
            <div className="text-white font-montserrat ml-[120px]">
                <h3 className="text-grey text-base font-normal mb-6">
                    _______ Выбор Illuminous
                </h3>
                <h1 className="text-4xl font-semibold mb-4">Джокер</h1>
                <p className="text-[18px] font-medium mb-7">
                    Готэм. Комик Артур Флек живет с больной матерью, <br />{" "}
                    которая с детства учит его «ходить с улыбкой»
                </p>
                <button className="text-base font-medium px-5 py-[14.5px] bg-red rounded-4xl flex items-center gap-[10px]">
                    Смотреть
                    <img src={Play} alt="Movie Play Icon" />
                </button>
            </div>

            <div>
                <button>
                    <img src={RightArrow} alt="Right Arrow Icon" />
                </button>
            </div>

            <div className="ml-32 flex items-end gap-4 absolute bottom-10">
                {Banners.map((banner) => (
                    <div
                        className={
                            banner.active
                                ? "w-1 h-8 rounded-full bg-red"
                                : "w-1 h-5 rounded-full bg-white"
                        }
                        key={banner.id}
                    ></div>
                ))}
            </div>
        </div>
    );
}
