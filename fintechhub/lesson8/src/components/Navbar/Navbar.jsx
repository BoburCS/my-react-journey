import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <header className="py-3 px-20 bg-white shadow-sm border-b-2 border-slate-100">
            <nav className="w-full flex items-center justify-between">
                <div>
                    <NavLink to="/" className="text-2xl font-bold">Lesson8</NavLink>
                </div>
                <div className="flex items-center gap-5">
                    <NavLink to="/" className="font-semibold">Home</NavLink>
                    <NavLink to="/weather" className="font-semibold">Weather</NavLink>
                    <NavLink to="/photos" className="font-semibold">Photos</NavLink>
                    <NavLink to="/video" className="font-semibold">Video</NavLink>
                    <NavLink to="/reducer" className="font-semibold">Reducer</NavLink>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;
