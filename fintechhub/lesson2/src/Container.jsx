import React from "react";

function Container() 
{
    const products = 
    [
        {name: "phone", price: 100},
        {name: "laptop", price: 1000},
        {name: "tablet", price: 500},
        {name: "watch", price: 200},
        {name: "headphones", price: 50},
    ];

	return (
        <div>
            {products.map((product, index) => {
                return (
                    <div key={index}>
                        <h3>{product.name}</h3>
                        <h4>{product.price}</h4>
                    </div>
                )
            })}
        </div>
    );
}

export default Container;
