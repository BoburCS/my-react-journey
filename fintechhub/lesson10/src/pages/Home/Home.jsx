import { useState, useEffect, useContext } from "react";
import FoodsContext from "../../context/FoodsContext";
import Sidebar from "../../components/Sidebar";
import FoodCard from "../../components/FoodCard";
import Flex from "../../utils/Flex";
import "./Home.css";

function Home() {
    const { state, dispatch } = useContext(FoodsContext);
    const [categories, setCategories] = useState([]);
    const [foods, setFoods] = useState(state.foods);

    useEffect(() => {
        const CategorySet = new Set();
        state.foods.forEach(food => CategorySet.add(food.category));
        setCategories([...CategorySet]);
    }, [state.foods]);

    const filteredFoods = (event) => {
        if (event.target.textContent === "All") {
            setFoods(state.foods);
            return;
        }
        setFoods(state.foods.filter(food => food.category === event.target.textContent));
    }

    const addBasket = (id) => dispatch({ type: "AddBasket", payload:  id});

    return (
        <Flex w={"100%"}>
            <Sidebar>
                <h1>Categories</h1>
                <button onClick={filteredFoods}>All</button>
                {categories.length > 0 ? (
                    categories.map(category => (
                        <div key={category}>
                            <button onClick={filteredFoods}>{category}</button>
                        </div>
                    ))
                ) : null}
            </Sidebar>
            <main className="main">
                {foods.length > 0 ? (
                    foods.map(food => (
                        <FoodCard key={food.id} {...food} addBasket={addBasket}/>
                    ))
                ) : <p>no data</p> 
                }
            </main>
        </Flex>
    );
}

export default Home;
