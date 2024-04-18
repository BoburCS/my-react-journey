import { NavLink } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="w-full py-4 px-20 bg-slate-50 flex items-center gap-5">
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"/admin"}>Admin</NavLink>
            <NavLink to={"/category"}>Category</NavLink>
            <NavLink to={"/genre"}>Genres</NavLink>
            <NavLink to={"/addmovie"}>MovieForm</NavLink>
            <NavLink to={"/movies"}>Movies</NavLink>
        </nav>
    )
}

