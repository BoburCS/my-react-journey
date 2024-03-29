import React from "react";
import RecipeCard from "./RecipeCard/RecipeCard";

function RecipeContent({ recipes }) {
    return (
        <div className="recipe-container">
            {recipes.length > 0 ? (
                recipes.map(recipe => (
                    <RecipeCard key={recipe.recipe.uri} recipe={recipe.recipe} />
                ))
            ) : (<p>No data to display.</p>)
            }
        </div>
    );
}

export default RecipeContent;
