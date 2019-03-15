import { SET_SEARCH, SET_BOOKSFOUND } from "../constants";
import axios from "axios";

export const setSearch = function(text) {
  return {
    type: SET_SEARCH,
    text
  };
};

export const setBookFound = function(array) {
  return {
    type: SET_BOOKSFOUND,
    find: array
  };
};

export const fecthSearch = function(Search) {
  return function(dispatch, getState) {
    axios.get(`/api/Search/${this.search}`).then(res => {
      dispatch(setSearch(res.data.text));
    });
  };
};
