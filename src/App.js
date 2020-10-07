import React from "react";
import { RecipesState } from "./context/RecipesContext";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Nav from "./components/Nav/Nav";
import Hero from "./components/Hero/Hero";
import Contact from "./components/Contact/contact";
import Log from "./components/LogIn/log";
import Footer from "./components/Footer/footer";
import FullRecipe from "./components/Recipes/FullRecipe";


import "./App.css";

const App = () => {
  return (
    <RecipesState>
      <Router>
        <Nav />

        <Switch>
            <Route path="/" exact component={Hero} />
            <Route path="/home" component={Hero} />
            <Route path="/contact" component={Contact} />
            <Route path="/log" component={Log} />
            <Route path="/recipes/:id" component={FullRecipe} />
        </Switch>

        <Footer />
      </Router>
    </RecipesState>
  );
};

export default App;
