import { useEffect, useContext } from "react";
import FoodsContext from "../../context/FoodsContext";
import BasketFoodCard from "../../components/BasketFoodCard";
import Flex from "../../utils/Flex";

function Basket() {
    const { state, dispatch } = useContext(FoodsContext);

    const deleteBasket = (id) => dispatch({ type: "DeleteBasket", payload: id });

    useEffect(() => dispatch({ type: "TotalPrice" }), [state.basket]);

    return (
        <>
            <Flex direction={"column"} p={"30px"} gap={"20px"}>
                {state.basket.length > 0 ? (
                    state.basket.map(food => (
                        <BasketFoodCard key={food.id} food={food} deleteBasket={deleteBasket}/>
                    ))
                ) : (
                    <div>
                        <p>No data</p>
                    </div>
                )}
            </Flex>

            <Flex direction={"column"}>
                <h1>Total Price</h1>
                <p>Total: {state.totalPrice?.toFixed(2)}</p>
            </Flex>
        </>
    );
}

export default Basket;
