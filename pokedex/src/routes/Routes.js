import react from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "../components/Header/Header";
import PokeCard from "../components/PokeCard/PokeCard";

export default function Routes() {
  return (
    <BrowserRouter>
      <Header />
      <PokeCard />
      <Switch>
        <Route exact path="/"></Route>
      </Switch>
    </BrowserRouter>
  );
}
