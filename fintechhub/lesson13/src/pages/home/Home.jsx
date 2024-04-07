import Hero from "@containers/Hero";
import Banner from "@components/Banner";
import Search from "@components/Search";
import Genres from "@components/Genres";
import News from "@components/News";
import Movie from "@components/Movie";
import Benefits from "@components/Benefits";
import Subscriptions from "@components/Subscriptions";

export default function Home() {
    return (
        <>
            <Hero bg={"bg-hero"} Banner={Banner}/>
            <main className="px-[170px] py-32 flex flex-col items-center gap-[150px]">
                <Search />
                <Genres />
                <News />
                <Movie />
            </main>
            <Benefits />
            <Subscriptions />
        </>
    );
}
