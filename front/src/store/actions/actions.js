import Axios from 'axios';
import { SET_SHOWMODAL, SET_HIDEMODAL, SET_LOGIN } from '../constants';

export const setShowModal = function setShowModal() {
  return {
    type: SET_SHOWMODAL,
    show: true,
  };
};

export const setHideModal = function setHideModal() {
  return {
    type: SET_HIDEMODAL,
    hide: false,
  };
};

const setLogin = function setLogin(user) {
  return {
    type: SET_LOGIN,
    login: user,
  };
};

export const fetchLogin = () => dispatch => Axios.get('/me')
  .then(res => res.data)
  .then(user => dispatch(setLogin(user)));
