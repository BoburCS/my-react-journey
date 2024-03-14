import { useState } from "react";
import "./Foods.css";
import FoodCard from "./FoodCard";

const foods = [
    {id: 1, food: "pizza", price: 5, chosen: false},
    {id: 2, food: "hamburger", price: 3, chosen: false},
    {id: 3, food: "hot dog", price: 2, chosen: false},
    {id: 4, food: "taco", price: 2, chosen: false},
]

function Foods() {
    const [current, setCurrent] = useState(null);
    const [chosen, setChosen] = useState([]);
    const [sum, setSum] = useState(0);
    const handleClick = (food) => {
        setCurrent(food);
        setChosen([...chosen, food]);
        setSum(sum + food.price);
    };

    // basket ${chosen.find(chosen=> chosen.id === food.id) ? 'chosen' : ''}`
    return (
        <>
            <h1>Foods</h1>
            <div>
                {foods.map(food => (
                    <>
                    <div key={food.id} onClick={() => handleClick(food)}  className={`basket ${chosen.find(chosen => chosen.id === food.id) ? "chosen" : ""}`}>
                        <h2>{food.food}</h2>
                        <p>{food.price}</p>
                    </div>
                    <FoodCard key={food.id} food={food} handleClick={handleClick}/>
                    </>
                ))}
            </div>

            <h1>Chosen food {current?.food}</h1>
            <h1>Price {current?.price}</h1>
            <h1>Total {sum}</h1>
        </>
    );
}

export default Foods;
