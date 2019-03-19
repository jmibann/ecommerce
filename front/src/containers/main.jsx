 
import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom'
import Axios from 'axios';
import Home from "../components/home.jsx";
import Log from "./log";
import Header from '../components/Header.jsx';
import SearchBarContainer from './SearchBarContainer';
import SearchContainer from './SearchContainer';
import ABookContainer from './aBookcontainer';

class Main extends React.Component {
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
          <Route path='/book'render={()=> <ABookContainer/>} />
          <Redirect from="/" to="/home" />
        </Switch>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
