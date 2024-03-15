import { SlBasket } from "react-icons/sl";
import Flex from "../../utils/Flex";
import "./FoodCard.css";

function FoodCard({ id, name, price, addBasket }) {
    return (
        <Flex className="food-card" direction={"column"} p={"20px"} radius={"8px"} bg={"#fff"}>
            <h4>{name}</h4>
            <p>{price}</p>
            <button onClick={() => addBasket(id)}>
                Add to Basket <SlBasket/>
            </button>
        </Flex>
    );
}

export default FoodCard;
