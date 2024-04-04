
export default function Navbar() {
    return (
        <header className="py-3 px-20 w-ful shadow">
            <nav className="flex items-center justify-between">
                <div>
                    <a href="/">
                        <h1 className="text-2xl font-sans font-semibold">&lt;/bobur&gt;</h1>
                    </a>
                </div>
                <div className="flex items-center gap-5">
                    <a href="">Home</a>
                    <a href="">About</a>
                    <a href="">Projects</a>
                    <a href="">Contacts</a>
                </div>
                <div className="flex items-center gap-5">
                    <button className="text-white font-semibold px-3 py-2 rounded-lg bg-purple-700">Sign In</button>
                    <button className="text-white font-semibold px-3 py-2 rounded-lg bg-purple-700">Sign Up</button>
                </div>
            </nav>
        </header>
    );
}
