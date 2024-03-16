import Header from "./components/Header";

const User = {
    name: "Bobur",
    age: 19,
    isMarried: false
}

function App() {
    return (
        <>
            <Header User={User}/>
        </>
    )
}

export default App;
