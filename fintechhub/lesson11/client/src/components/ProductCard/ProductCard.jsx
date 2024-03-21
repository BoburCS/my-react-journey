import { useNavigate } from "react-router-dom";
import "./productCard.css";

function ProductCard({ product, handleBasket }) {
    const { id, category, name, price, characteristics } = product;
    const navigate = useNavigate();

    return (
        <div className="product-card">
            <h3>{name}</h3>
            <p>${price}</p>
            <div className="btn-container">
                <button onClick={() => navigate(`/products/${id}`)}>See More</button>
                <button onClick={() => handleBasket(product)}>Add to basket</button>
            </div>
        </div>
    );
}

export default ProductCard;
