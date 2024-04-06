import Hero from "./components/Hero";
import Search from "./components/Search";
import Genres from "./components/Genres";
import News from "./components/News";
import Movie from "./components/Movie";

export default function App() {
    return (
        <>
            <Hero />
            <main className="px-[170px] py-32 flex flex-col items-center gap-[150px]">
                <Search />
                <Genres />
                <News />
                <Movie /> 
            </main>
        </>
    );
}
