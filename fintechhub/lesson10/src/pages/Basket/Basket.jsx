import { useState, useEffect, useContext } from "react";
import FoodsContext from "../../context/FoodsContext";
import Flex from "../../utils/Flex";
import BasketFoodCard from "../../components/BasketFoodCard";

function Basket() {
    const { state, dispatch } = useContext(FoodsContext);

    const deleteBasket = (id) => dispatch({ type: "DeleteBasket", payload: id });

    const [total, setTotal] = useState(null);

    useEffect(() => {
        const totalPrice = state.basket.reduce((total, food) => total + food.price, 0);
        setTotal(totalPrice);
    }, [state.basket]);

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
                <p>Total: {total.toFixed(2)}</p>
            </Flex>
        </>
    );
}

export default Basket;
