import React from 'react'

function FoodCard({food, handleClick}) {
  return (
    <div onClick={() => handleClick(food)}>
        <h2>{food.food}</h2>
        <p>{food.price}</p>
    </div>
  )
}

export default FoodCard