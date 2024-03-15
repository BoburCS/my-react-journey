import Flex from "../../utils/Flex";

function FoodCard({ id, name, price, addBasket }) {
    return (
        <Flex direction={"column"} p={"20px"} bg={"red"}>
            <p>{name}</p>
            <p>{price}</p>
            <button onClick={() => addBasket(id)}>Add to basket</button>
        </Flex>
    );
}

export default FoodCard;
