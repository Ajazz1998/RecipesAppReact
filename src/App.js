import React from "react";
import { RecipesState } from "./context/RecipesContext";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Nav from "./components/Nav/Nav";
import Hero from "./components/Hero/Hero";
import Contact from "./components/Contact/contact";
import About from "./components/About/about";
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
            <Route path="/about" component={About} />
            <Route path="/recipes/:id" component={FullRecipe} />
        </Switch>

      </Router>
    </RecipesState>
  );
};

export default App;
