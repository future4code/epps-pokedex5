import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Home from "../Pages/Home/Home";
import Pokedex from "../Pages/Pokedex/Pokedex";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import DetailsPage from "../Pages/DetailsPage/DetailsPage";

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
        <Route exact path={"/DetailsPage/:pokemonId"}>
          <DetailsPage />
        </Route>
        <Route>
          <ErrorPage />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}
