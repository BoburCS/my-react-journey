import { NavLink } from "react-router-dom";

export default function Navbar() {
    return (
        <header>
            <nav style={{ padding: "12px 70px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <h2>Navbar</h2>

                <div>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/tabpanel">tabpanel</NavLink>
                </div>
            </nav>
        </header>
    );
};
