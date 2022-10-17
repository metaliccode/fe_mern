import React from "react";
import Header from "./components/Header";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./pages/Home";
import Teams from "./pages/Teams";
import Services from "./pages/Services";

// rafce
const App = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/teams" exact>
          <Teams />
        </Route>
        <Route path="/services" exact>
          <Services />
        </Route>
        <Redirect to="/" />
      </Switch>
    </>
  );
};

export default App;
