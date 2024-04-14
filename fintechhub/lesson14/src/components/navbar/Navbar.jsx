import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const links = [
    { url: "", title: "Home" },
    { url: "posts", title: "Posts" },
    { url: "signin", title: "Signin"},
    { url: "signup", title: "Signup"},
    { url: "admin", title: "Admin"},
    { url: "movies", title: "Movies"},
];

export default function Navbar() {
    const user = useSelector((state) => state.user.user);

    return (
        <nav>
            <div className="flex items-center gap-3">
                {links.map((link, index) => (
                    <NavLink to={`/${link.url}`} key={index}>
                        {link.title}
                    </NavLink>
                ))}
            </div>
        </nav>
    );
}
