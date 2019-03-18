import React from "react";
import { connect } from "react-redux";
// import { setSearch, setBookFund } from "../store/actions/actions";
import { Switch, Route, Redirect } from 'react-router-dom'
import Axios from "axios";
import Home from "../components/home.jsx";
import Log from './log'
import Header from "../components/Header.jsx";

class Main extends React.Component {


  render() {
    return (
      <div>
        <section>
          <Header />
        </section>

        <Switch>
          <Route path='/home' render={() => <Home />} />
          <Route path='/log' render={() => <Log />} />
          {/* <Route path='/search' Component={SearchContainer} /> */}
          <Redirect from='/' to='/home' />
        </Switch>

      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    search: state.search,
    find: state.find
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setSearch: text => dispatch(setSearch(text)),
    setBookFound: ArrayBOoks => dispatch(setBookFound(ArrayBOoks))
  };
}



export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
