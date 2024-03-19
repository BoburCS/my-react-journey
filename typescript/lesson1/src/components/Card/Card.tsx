import { useState } from "react";
import "./card.css";

type CardProps = {
    product: {
        title: string;
        price: number;
        id: string;
    };
}

function Card(props: CardProps) {
    const [count, setCount] = useState(0);

    const handleCount = (type: string) => {
        if (type === "+") setCount(prev => prev + 1);
        if (count === 0) return;
        if (type === "-") setCount(prev => prev - 1);
    }

    return (
        <div className="card">
            <h2>{props.product.title}</h2>
            <h2>{props.product.price}</h2>
            <button onClick={() => handleCount("-")}>-</button>
            <h3>{count}</h3>
            <button onClick={() => handleCount("+")}>+</button>
        </div>
    );
}

export default Card;
