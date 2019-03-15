import React from "react";
import Search from "../components/Search";

export default class SearchContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      SearchQuery: " "
    };
  }

  render() {
    return (
      <div>
        <Search />
      </div>
    );
  }
}
