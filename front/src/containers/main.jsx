import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Header from "../components/Header.jsx";
import SearchBarContainer from "./SearchBarContainer";
import SearchContainer from "./SearchContainer";

export default () => (
  <div id="main" className="container-fluid">
    <Header />
    <SearchBarContainer />
    <div>
      <Switch>
        <Route path="/search" component={SearchContainer} />
      </Switch>
    </div>
  </div>
);
