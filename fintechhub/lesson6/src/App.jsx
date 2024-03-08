import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import phones from "./data/phones";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import Phones from "./pages/Phones";
import VotingPage from "./pages/VotingPage";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Flex from "./utilities/Flex";
import Button from "./components/Button";
import Practice from "./pages/Practice";

function App() {
    const [products, setProducts] = useState([]);
    const [product, setProduct] = useState({title: "", price: "", brand: "", description: ""});
    const handleSubmit = (event) => {
        event.preventDefault();
        let newProduct = {...product, id: uuidv4()};
        setProducts(prev => [...prev, newProduct]);
        event.target.reset();
        console.log(newProduct)
        console.log(products)
    }

    const [sidebar, setSidebar] = useState(false);
    const hanldleClick = () => setSidebar(prev => !prev);

    return (
        <>  
            <Flex width={"100%"}>
                <Sidebar width={sidebar ? "300px" : "0"} display={sidebar ? "block" : "none"}>
                    {sidebar && <Button onClick={hanldleClick} padding={"10px 16px"}>Close</Button>}
                </Sidebar>
                <Flex direction={"column"} flex={"1"}>
                    <Navbar/>
                    <Routes>
                        <Route path="/" element={<Home products={products}/>}/>
                        <Route path="/admin" element={<Admin handleSubmit={handleSubmit} product={product} setProduct={setProduct}/>}/>
                        <Route path="/phones/:id" element={<Phones phones={phones}/>}/>
                        <Route path="/votingpage" element={<VotingPage/>}/>
                        <Route path="/practice" element={<Practice/>}/>
                    </Routes>
                </Flex>
            </Flex>

            {!sidebar ? <Button onClick={hanldleClick} padding={"10px 16px"}>Open</Button> : null}
        </>
    );
}

export default App;
