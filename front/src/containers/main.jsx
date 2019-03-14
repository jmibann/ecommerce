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
  }
  // ESTO ES UNA PRUEBA
  
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
   //la tercera es la ultima 
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Main);

 

