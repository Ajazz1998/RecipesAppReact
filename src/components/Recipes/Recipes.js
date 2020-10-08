import React, { useContext } from "react";
import { RecipesContext } from "../../context/RecipesContext";
import { Link } from "react-router-dom";
import ErrorMsg from "./ErrorMsg";
import './recipes.css';

const Recipes = () => {
  const { recipes, error, loading } = useContext(RecipesContext);

  return (
    <React.Fragment>
      {error && <ErrorMsg />}
      {recipes &&
        !error &&
        !loading &&
       recipes.map((recipe, index) => (

          <div key={index} className="recipe">
            <Link to={`/recipes/${recipe.recipe.label}`}>
              <div
                style={{
                  background: `url(${recipe.recipe.image}) no-repeat center/cover`,
                }}
                className="recipeBg"
              ></div>
            </Link>
            <div className="recipeInfo">
              <p>{recipe.recipe.label}</p>
              <p>{Math.floor(recipe.recipe.calories)} calories</p>
              <Link to={`/recipes/${recipe.recipe.label}`}>View more</Link>
            </div>
          </div>
       ))}
    </React.Fragment>
  );
};


export default Recipes;
