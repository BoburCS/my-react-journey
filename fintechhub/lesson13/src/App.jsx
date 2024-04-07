import Hero from "./components/Hero";
import Search from "./components/Search";
import Genres from "./components/Genres";
import News from "./components/News";
import Movie from "./components/Movie";
import Benefits from "./components/Benefits";
import Subscriptions from "./components/Subscriptions";
import Footer from "./components/Footer";

export default function App() {
    return (
        <div className="font-montserrat">
            <Hero />
            <main className="px-[170px] py-32 flex flex-col items-center gap-[150px]">
                <Search />
                <Genres />
                <News />
                <Movie /> 
            </main>
            <Benefits />
            <Subscriptions />
            <Footer />
        </div>
    );
}
