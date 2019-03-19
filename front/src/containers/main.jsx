<<<<<<< HEAD
import React from "react";
import { connect } from "react-redux";
import { setSearch, setBookFund } from "../store/actions/actions";
import axios from "axios";
import SearchBar from "../components/SearchBar.jsx";
import Header from "../components/Header.jsx";

class Main extends React.Component {
    handleChange(e) {
      this.props.setSearch(e.target.value);
    }
  
    componentDidUpdate(prevState) {
      if (this.state.search == prevState.search)
        axios.get(
          `http://www.omdbapi.com/?apikey=8c8bfbdc&s=${this.props.search}`
        ).then(books => {
          console.log(books);
          this.props.setBookFound(books);
        });
    }
  
    render() {
      return (
        <div>
          {/* Odio a Ramiro */}
          <section>
            <Header />
            </section>
            <SearchBar />
        </div>
      );
    }
=======
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from '../components/home';
import Log from './log';
import Header from '../components/Header';
import SearchBarContainer from './SearchBarContainer';
import SearchContainer from './SearchContainer';
import { fetchLogin } from '../store/actions/actions';
import ABookContainer from './aBookcontainer';

class Main extends React.Component {
  componentDidMount() {
    this.props.fetchLogin();
>>>>>>> 636357ccd04050f22812c8f8d69b2266038410a5
  }

  render() {
    return (
      <div>
        <section>
          <Header />
          {console.log(this.props)}
          <SearchBarContainer />
        </section>
        <Switch>
          <Route path="/home" render={() => <Home />} />
          <Route path="/log" render={() => <Log />} />
          <Route path="/search" render={() => <SearchContainer />} />
          <Route path="/book" render={() => <ABookContainer />} />
          <Redirect from="/" to="/home" />
        </Switch>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    isLogin: state.login.isLogin,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchLogin: () => dispatch(fetchLogin()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
