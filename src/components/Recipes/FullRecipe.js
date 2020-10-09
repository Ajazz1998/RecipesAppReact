/** @jsx jsx */
import { jsx } from "@emotion/core";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { RecipesContext } from "../../context/RecipesContext";
import Container from "../reusableComponents/Container";
import Footer from "../Footer/footer";


import './fullrecipe.css'

const FullRecipe = () => {
  const { recipes } = useContext(RecipesContext);
  const { id } = useParams();

  return (
    <div>
    <section className="fullRecipe">
      <Container>
        {recipes &&
          recipes
            .filter((recipeData) => recipeData.recipe.label === id)
            .map((recipeData, index) => (
              <div key={index} className="fullRecipeCard">
                <div
                  style={{
                    background: `url(${recipeData.recipe.image}) no-repeat center/cover`,
                  }}
                  className="fullRecipeBg"
                ></div>

                <div className="fullRecipeInfo">
                <h2>{recipeData.recipe.label}</h2>

                  <p>ingredientLines</p>
                  {recipeData.recipe.ingredientLines.map(
                    (ingredient, index) => (
                      <ul key={index}>
                        <li>{ingredient}</li>
                      </ul>
                    )
                  )}
                  <button className="btns">Buy Now</button>

                </div>


              </div>
            ))}
      </Container>
    </section>
    <Footer />
    </div>
  );
};

export default FullRecipe;
