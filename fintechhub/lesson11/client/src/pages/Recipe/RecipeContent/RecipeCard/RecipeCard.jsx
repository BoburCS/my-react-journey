import React from "react";

function RecipeCard({ recipe }) {
    return (
        <div className="recipe-card">
            <img src={recipe.image} alt={recipe.label} />
            <h3>{recipe.label}</h3>
            <p>{recipe?.cuisineType}</p>
        </div>
    );
}

export default RecipeCard;
