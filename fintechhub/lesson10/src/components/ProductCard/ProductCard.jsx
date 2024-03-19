import React from "react";
import { useNavigate } from "react-router-dom";

function ProductCard({product}) {
    const navigate = useNavigate();
    return (
        <div>
            <h1>{product.title}</h1>
            <button onClick={() => navigate(`/product/${product.id}`)}>See more</button>
        </div>
    );
}

export default ProductCard;
