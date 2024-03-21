import { useNavigate } from "react-router-dom";
import "./basketCard.css";

function BasketCard({ id, category, name, characteristics, price, handleDelete }) {
    const navigate = useNavigate();
    
    const handleClick = (id) => {
        navigate(`/products/${id}`);
    }
    
    return (
        <div onClick={() => handleClick(id)} className="basket-card">
            <h2>{name}</h2>
            <button onClick={(event) => handleDelete(event, id)}>Delete</button>
        </div>
    );
}

export default BasketCard;
