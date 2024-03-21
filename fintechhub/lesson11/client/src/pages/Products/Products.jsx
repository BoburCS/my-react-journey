import { useState, useEffect, useContext } from "react";
import axios from "axios";
import UsersContext from "../../context/usersContext";
import ProductCard from "../../components/ProductCard/ProductCard";
import "./products.css";

function Products() {
    const { setBasket } = useContext(UsersContext);
    const [products, setProducts] = useState([]);

    async function fetchData() {
        try {
            const res = await axios.get("http://localhost:5000/products");
            setProducts(res.data.products);
        }
        catch(err) {
            console.log(err);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    const handleBasket = (product) => {
        setBasket(prev => [...prev, product]);
    }

    return (
        <div className="products-page">
            <h1>Products</h1>
            <div className="products-container">
                {products.length > 0 ? (
                    products.map(product => (
                        <ProductCard key={product.id} product={product} handleBasket={handleBasket}/>
                    ))
                ) : <p>No data</p>
                }
            </div>
        </div>
    );
}

export default Products;
