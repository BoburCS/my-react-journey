import Banner from "./Banner";
import Header from "./Header";

export default function Navbar() {
    return (
        <div className="w-full h-screen bg-hero bg-no-repeat bg-cover">
            <Header />
            <Banner />
        </div>
    );
}
