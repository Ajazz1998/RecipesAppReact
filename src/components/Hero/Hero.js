
import React, { useContext } from "react";
import { RecipesContext } from "../../context/RecipesContext";
import Container from "../reusableComponents/Container";

import Recipes from "../Recipes/Recipes";
import Header from "../Recipes/header";
import Pagination from "../Pagination/Pagination";
import Footer from "../Footer/footer";

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

        <h1>Popular recipe collections...</h1>            

            <Container>
            <Header />
            </Container>
       
            <h1 className="fix-h">Our favourite Meal..</h1>            

      
            <Container>
            <Recipes />
          </Container>
          <Pagination />
       
           <Footer />

        </React.Fragment>
      )}
    </section>
  );
};

export default Hero;
