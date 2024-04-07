import Button from "@elements/Button";

import People from "@icons/icon-people.svg";
import Quality from "@icons/icon-quality.svg";
import Offline from "@icons/icon-offline.svg";
import Lock from "@icons/icon-lock.svg";
import Film from "@icons/icon-film.svg";
import Toggle from "@icons/icon-toggle.svg";

const pros = [
    {id: "10000", image: People, content: "Одна подписка для всей семьи или друзей"},
    {id: "10001", image: Quality, content: "Максимальное качество"},
    {id: "10002", image: Offline, content: "Просмотр офлайн"},
    {id: "10003", image: Lock, content: "Никакой рекламы"},
    {id: "10004", image: Film, content: "Каждый день найдётся, что посмотреть"},
    {id: "10005", image: Toggle, content: "Можно отключить в любой момент"},
];

export default function Benefits() {
    return (
        <div className="text-white w-full h-auto px-[280px] py-[90px] bg-light-dark flex flex-col items-center mb-[150px]">
            <div className="w-full">
                <h5 className="text-red text-base font-medium text-center mb-6">Illuminous+</h5>
                <h2 className="text-3xl font-semibold text-center mb-4">Фильмы и сериалы по подписке Illuminous+</h2>
                <h3 className="text-2xl font-medium text-center mb-[75px]">Бесплатно до конца года</h3>
            </div>

            <div className="w-full flex gap-20 mb-[70px]">
                <div className="flex flex-col gap-11">
                    {pros.slice(0, 3).map(pro => (
                        <div key={pro.id} className="w-full flex items-center gap-7">
                            <img src={pro.image} />
                            <h4>{pro.content}</h4>
                        </div>
                    ))}
                </div>
                <div className="flex flex-col gap-11">
                    {pros.slice(3, 6).map(pro => (
                        <div key={pro.id} className="w-full flex items-center gap-7">
                            <img src={pro.image} />
                            <h4>{pro.content}</h4>
                        </div>
                    ))}
                </div>
            </div>

            <Button>
                Попробовать бесплатно
            </Button>
        </div>
    );
}
