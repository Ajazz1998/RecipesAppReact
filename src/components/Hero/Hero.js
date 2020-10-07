/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import React, { useContext } from "react";
import { RecipesContext } from "../../context/RecipesContext";
import Container from "../reusableComponents/Container";

import Recipes from "../Recipes/Recipes";
import Header from "../Recipes/header";
import Pagination from "../Pagination/Pagination";
import Loader from "../Loader/Loader";

import './hero.css'

const Hero = () => {
  const { loading } = useContext(RecipesContext);

  return (
    <section  className="hero">

      {loading ? (
        <Loader />
      ) : (

        <React.Fragment>

        
            <Container>
            <h1>Popular recipe collections...</h1>            
            <h1></h1>            
            <Header />
            </Container>
       

      
            <Container>
            <h1>Our favourite Meal..</h1>            
            <h1></h1>  
            <h1></h1>  
            <Recipes />
          </Container>
          <Pagination />
       


        </React.Fragment>
      )}
    </section>
  );
};

export default Hero;
