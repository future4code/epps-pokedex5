import react from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "../components/Header/Header";

export default function Routes() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/">
          Estamos na main
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
