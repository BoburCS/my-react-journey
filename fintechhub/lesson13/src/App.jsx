import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "@layouts/MainLayout";
import Footer from "@containers/Footer";

const Home = lazy(() => import("@pages/home"));
const Movie = lazy(() => import("@pages/movie"));

export default function App() {
    return (
        <>
            <MainLayout>
                <Suspense fallback={<h1>Loading...</h1>}>
                    <Routes>
                        <Route exact path="/" element={<Home />} />
                        <Route exact path="/movie" element={<Movie />} />

                        <Route path="*" element={<h1 className="text-white">404! Not Found</h1>} />
                    </Routes>
                </Suspense>
                <Footer />
            </MainLayout>
        </>
    );
}
