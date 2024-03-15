import Flex from "../../utils/Flex";

function BasketFoodCard({ food, deleteBasket }) {
    return (
        <Flex p={"30px"} bg={"blue"} gap={"30px"}>
            <p>{food.name}</p>
            <p>{food.price}</p>
            <p>{food.category}</p>
            <button onClick={() => deleteBasket(food.id)}>Delete</button>
        </Flex>
    );
}

export default BasketFoodCard;
