import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Products() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
                setProduct(response.data);
            }
            catch(err) {
                console.log(err);
            }
        }
        fetchData();
    }, [id]);

    return (
        <div>
            {product ? (
                <>
                    <h1>{product?.title}</h1>
                    <img src={product?.image} alt={product?.title} />
                </>
            ) : <p>404 not found</p>}
            
        </div>
    );
}

export default Products;
