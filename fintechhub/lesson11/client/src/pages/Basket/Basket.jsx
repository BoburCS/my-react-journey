import { useContext } from "react";
import UsersContext from "../../context/usersContext";
import BasketCard from "../../components/BasketCard";
import "./basket.css";

function Basket() {
    const { basket, setBasket } = useContext(UsersContext);

    const handleDelete = (event, id) => {
        event.stopPropagation();
        setBasket(basket.filter(basketProduct => basketProduct.id !== id));
    }

    return (
        <div className="basket-page">
            {basket.length > 0 ? (
                basket.map(basketProduct => (
                    <BasketCard key={basketProduct.id} {...basketProduct} handleDelete={handleDelete}/>
                ))
            ) : <p>No data</p>}
        </div>
    );
}

export default Basket;
