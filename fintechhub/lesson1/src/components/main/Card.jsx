import { useState } from "react";

function Card( { id, name, price, image } ) 
{ 
    let totalPrice = 0;
    const [amount, setAmount] = useState(0);
    const add = () => setAmount(amount + 1);
    const remove = () => amount > 0 && setAmount(amount - 1);
    totalPrice = amount * parseFloat(price);

    return (
    <div className="card" key={id} >
        <img src={image} alt={name} />
        <div className="flex align-center justify-space-between">
            <h3>{name}</h3>
            <h3>Price: {price}</h3>
        </div>
        <div className="flex align-center justify-space-between">
            <div>
                <h4>Total Price: {totalPrice} </h4>
            </div>
            <div className="flex align-center g-1">
                <button onClick = {add}> + </button>
                <span>{amount}</span>
                <button onClick = {remove}> - </button>
            </div>
        </div>            
    </div>
  );
}

export default Card;