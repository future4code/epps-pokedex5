import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Home from "../Pages/Home/Home";
import Pokedex from "../Pages/Pokedex/Pokedex";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import DetalhesLayout from "../Pages/Pagina de Detalhes/Detalhes"
import Detalhes from "../Pages/Pagina de Detalhes/Detalhes";

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
        <Route>
          <ErrorPage />
        </Route>
        <Route exact path="/Detalhes">
          <DetalhesLayout/>
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}
