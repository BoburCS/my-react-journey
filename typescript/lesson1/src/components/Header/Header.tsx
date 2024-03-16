// Types of Object that is coming from App
interface UserInformation {
    name: string;
    age: number;
    isMarried: boolean;
}

function Header({ User }: { User: UserInformation }) {
    return (
        <header>
            <nav>
                <div>
                    <h1>Hello, {User.name}</h1>
                </div>
            </nav>
        </header>
    );
}

export default Header;
