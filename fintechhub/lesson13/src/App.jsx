import Hero from "./components/Hero";
import Search from "./components/Search";
import Genres from "./components/Genres";

export default function App() {
    return (
        <>
            <Hero />
            <main className="px-[170px] py-32 flex flex-col items-center gap-[150px]">
                <Search />
                <Genres />
            </main>
        </>
    );
}
