import Header from "./components/header/Header.jsx";
import Main from "./components/main/Main.jsx";
import Carousel from "./components/carousel/Carousel.jsx";
import "./app.css";
import "./utilities.css";

function App () 
{
    return (
        <div>
            <Header />
            <Carousel />
            <Main />
        </div>
    );
}

export default App;