import React from "react";
import { connect } from "react-redux";
import SearchBar from "../components/SearchBar";
import { setSearch } from "../store/actions/actions";
import { fecthSearch } from "../store/actions/actions";

class SearchContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      SearchBarQuery:""
    };
    this.handleSearchInput = this.handleSearchInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSearchInput(Search) {
    this.setState({ SearchBarQuery: Search });
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.state.SearchBarQuery) {
      this.props.fecthSearch(this.state.SearchBarQuery);
    }
  }

  render() {
    return (
      <SearchBar
        setSearch={this.handleSearchInput}
        SearchBarQuery={this.state.SearchBarQuery}
        handleSubmit={this.handleSubmit}
      />
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
    setSearch: text => dispatch(setSearch(text))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchContainer);
