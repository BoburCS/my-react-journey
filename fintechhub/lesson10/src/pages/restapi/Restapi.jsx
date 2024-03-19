import axios from "axios";
import { useState, useEffect } from "react";
import ProductCard from "../../components/ProductCard/ProductCard";

const url = "https://fakestoreapi.com/products";

function Restapi() {
    const [products, setProducts] = useState([]);

    async function fetchApi(api) {
        try {
            const response = await axios.get(api);
            await setProducts(response.data);
        }
        catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        fetchApi(url);
    }, []);

    return (
        <div>
            {products.length > 0 ? (
                products.map(product => (
                    <ProductCard key={product.id} product={product}/>
                ))
            ) : <p>no data</p> }
        </div>
    );
}

export default Restapi;
