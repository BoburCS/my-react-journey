import Logo from "../assets/icons/icon-logo.svg";
import Profile from "../assets/icons/icon-profile.svg";

const navLinks = ["Главная", "Фильмы", "Сериалы", "Мультфильмы"];

export default function Header() {
    return (
        <header className="px-12 py-8 w-full">
            <nav className="flex items-center justify-between">
                <div className="flex items-center gap-16">
                    <a href="">
                        <img src={Logo} alt="Illiminous Logo" />
                    </a>

                    <ul className="flex items-start gap-10">
                        {navLinks.map((link, index) => (
                            <li key={index}>
                                <a
                                    href=""
                                    className="text-white text-base font-poppins font-normal"
                                >
                                    {link}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <img
                        src={Profile}
                        alt="Profile Icon"
                        className="cursor-pointer"
                    />
                </div>
            </nav>
        </header>
    );
}
