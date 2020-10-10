/** @jsx jsx */
import { jsx } from "@emotion/core";
import React, { useContext } from "react";
import { RecipesContext } from "../../context/RecipesContext";
import { Link } from "react-router-dom";
import ErrorMsg from "./ErrorMsg";
import './header.css'

const Recipes = () => {
  const { recipes, error, loading } = useContext(RecipesContext);

  return (
    <React.Fragment>
    
      {error && <ErrorMsg />}
      
      {recipes &&
        !error &&
        !loading &&
       recipes.map((recipe, index) => {
         return  <div key={index} className="recipess">
         <Link to={`/recipes/${recipe.recipe.label}`}>
          <div
            style={{
              background: `linear-gradient( rgba(0, 0, 0, .1), rgba(0, 0, 0, .7)), url(${recipe.recipe.image}) no-repeat center/cover`,
            }}
            className="recipeBg"
          >

            <div className="show-back">
                  <p>{recipe.recipe.label}</p>
                  <p>{Math.floor(recipe.recipe.calories)} calories</p>
            </div>
          


          </div>
        </Link>
      </div>
        
    }
          

       )}
    </React.Fragment>
  );
};


export default Recipes;
