/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
<<<<<<< HEAD
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';

export default () => {
  return (
    <Navbar bg="light" expand="lg" className='space-between'>
      <Navbar.Brand href="#home" className='mr-auto'>
        <img
        width="35%"
          src="./Logo.jpg"
          alt=""
        />
      </Navbar.Brand>
      <div>
        <Form inline> 
          <FormControl
            placeholder="Username"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
          <FormControl
            type="text"
            placeholder="Password"
            className=" mr-sm-2"
          />
          <Button type="submit">sign in</Button>
          <InputGroup.Prepend>
            <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
          </InputGroup.Prepend>
        </Form>
      </div>
    </Navbar>
  );
};
=======

import { Link, withRouter } from 'react-router-dom';
import {
  Form, Button, ButtonToolbar, ButtonGroup, DropdownButton, Dropdown,
} from 'react-bootstrap';
import { connect } from 'react-redux';
import Axios from 'axios';
import { setShowModal, fetchLogin, fetchUser } from '../store/actions/actions';
import LogReg from '../containers/logreg';


class Header extends React.Component {
  logOut() {
    Axios.get('/auth/logout', (req, res) => {
      res.send('logout');
    })
      .then(() => {
        this.props.fetchUser(null);
      });
  }

  redirect(name) {
    this.props.history.push(`/search/${name}`);
  }

  render() {
    if(this.props.isLogin != null){
       name = this.props.isLogin.email
    }
    const userLogin = (
      <ButtonGroup>
        <DropdownButton as={ButtonGroup} title={name} id="bg-nested-dropdown" drop="left">
          <Dropdown.Item eventKey="1" name="profile" onClick={this.redirect.bind(this)}>Profile</Dropdown.Item>
          <Dropdown.Item eventKey="2" name="purchases" onClick={this.redirect.bind(this)}> My purchases</Dropdown.Item>
          <Dropdown.Item eventKey="2" onClick={this.logOut.bind(this)}> Log Out </Dropdown.Item>
        </DropdownButton>
      </ButtonGroup>
    );


    const logReg = (
      <ButtonToolbar>
        <Button
          variant="primary"
          onClick={this.props.setShowModal}
        >
        Sign in/sign Up
        </Button>

        <LogReg />
      </ButtonToolbar>
    );

    return (
      <Navbar bg="dark" expand="lg">
        <Navbar.Brand className="mr-auto">
          <Link to="/">
            <img width="25%" src="./Images/BookStore.png" alt="" />
          </Link>
        </Navbar.Brand>
        <div>
          <Form inline>
            {this.props.isLogin ? userLogin: logReg }
          </Form>
        </div>
      </Navbar>
    );
  }
}


function mapStateToProps(state) {
  return {
    showModal: state.login.showModal,
    isLogin: state.login.isLogin,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setShowModal: () => dispatch(setShowModal()),
    fetchLogin: user => dispatch(fetchLogin(user)),
    fetchUser: user => dispatch(fetchUser(user)),
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));
>>>>>>> 636357ccd04050f22812c8f8d69b2266038410a5
