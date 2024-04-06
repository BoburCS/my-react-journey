import { useState } from "react";
import MovieCard from "./Cards/MovieCard";
import Movies from "../data/movies";
import RightArrow from "../assets/icons/icon-right-sm.svg";

const InitialTabs = [
    { id: "1", title: "Новинки", active: true },
    { id: "2", title: "Популярное", active: false },
    { id: "3", title: "Смотрят сейчас", active: false },
    { id: "4", title: "Рекомендации", active: false },
    { id: "5", title: "Топ 10", active: false },
    { id: "6", title: "Скоро на Illuminous", active: false },
];

export default function News() {
    const [Tabs, setTabs] = useState(InitialTabs);

    const handleTabClick = (id) => {
        setTabs(Tabs.map(tab => tab.id === id ? { ...tab, active: true } : { ...tab, active: false }));
    }

    return (
        <div className="text-white font-montserrat w-full">
            {/* Tab Panel */}
            <div className="mb-20 px-10 rounded-medium bg-light-dark flex items-center gap-20">
                {Tabs.map((tab) => (
                    <div onClick={() => handleTabClick(tab.id)} className="cursor-pointer" key={tab.id}>
                        <h2 className={`font-medium text-base py-6 ${tab.active ? 'border-b-2 border-red' : ''}`}>{tab.title}</h2>
                    </div>
                ))}
            </div>

            {/* Movies */}
            <div className="w-full flex items-center gap-20">
                <div className="w-full grid grid-cols-4 gap-11">
                    {Movies.map((movie) => (
                        <MovieCard {...movie} key={movie.id} />
                    ))}
                </div>
                <button className="px-5 py-4 rounded-full bg-red">
                    <img src={RightArrow} alt="Button Right Icon" />
                </button>
            </div>
        </div>
    );
}
