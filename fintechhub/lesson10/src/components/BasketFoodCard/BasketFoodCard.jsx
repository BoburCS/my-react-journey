import Flex from "../../utils/Flex";
import "./BasketFoodCard.css";

function BasketFoodCard({ food, deleteBasket }) {
    return (
        <Flex className="basket-card" p={"30px"} bg={"blue"} gap={"30px"}>
            <p>{food.name}</p>
            <p>{food.price}</p>
            <p>{food.category}</p>
            <button onClick={() => deleteBasket(food.id)}>Delete</button>
        </Flex>
    );
}

export default BasketFoodCard;
