import React from "react";
import { Switch, Route, Redirect } from 'react-router-dom'
import Home from "../components/home.jsx";
import Log from "./log";
import Header from "../components/Header.jsx";
import SearchBarContainer from "./SearchBarContainer";
import SearchContainer from "./SearchContainer";

export default class Main extends React.Component {
  render() {
    return (
      <div>
        <section>
          <Header />
          <SearchBarContainer />
        </section>
        <Switch>
          <Route path="/home" render={() => <Home />} />
          <Route path="/log" render={() => <Log />} />
          <Route path="/search" render={() => <SearchContainer />} />
          <Redirect from="/" to="/home" />
        </Switch>
      </div>
    );
  }
}

