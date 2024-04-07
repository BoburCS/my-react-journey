import Hero from "@containers/Hero";
import PageLayout from "@layouts/PageLayout";
import MovieBanner from "@components/MovieBanner";
import Trailer from "@components/Trailer";

export default function Movie() {
    return (
        <PageLayout>
            <Hero bg={"bg-movie"} Banner={MovieBanner}/>
            <Trailer />
            <div></div>
        </PageLayout>
    );
}
