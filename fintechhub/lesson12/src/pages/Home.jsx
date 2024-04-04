import { useState, useEffect } from "react";
import { useFetchGet } from "../hooks/useFetch";

function Home() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        useFetchGet("http://localhost:6969/products", (res) => {
            res.then(data => setProducts(data));
        });
    }, []);

    return (
        <div>
            <div>
                {products.length > 0 ? (
                    products.map(product => (
                        <div key={product.id}>
                            <h4>{product.title}</h4>
                            <p>{product.description}</p>
                            <p>{product.price}</p>
                        </div>
                    ))
                ) 
                : null}
            </div>
        </div>
    );
}

export default Home;
