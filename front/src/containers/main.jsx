 
import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "../components/Header.jsx";
import SearchBarContainer from "./SearchBarContainer";
import SearchContainer from "./SearchContainer";
import SingleBookContainer from "./SingleBookContainer";

export default () => (
 <div id="main" className="container-fluid">
  <Header />
  <SearchBarContainer />
  <div>
   <Switch>
    <Route path="/search" component={SearchContainer} />
    <Route path="/book" component={SingleBookContainer} />
   </Switch>
  </div>
 </div>
);