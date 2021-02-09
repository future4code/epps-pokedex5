import react from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Home from "../Pages/Home/Home";
import Pokedex from "../Pages/Pokedex/Pokedex";

export default function Routes() {
  return (
    <BrowserRouter>
    <Header />
      <Switch>               
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/pokedex">
          <Pokedex />
        </Route>        
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}
