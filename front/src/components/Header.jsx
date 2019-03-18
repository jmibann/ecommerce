import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { Link } from 'react-router-dom'
import { Form, Button, ButtonToolbar, ButtonGroup, DropdownButton, Dropdown } from "react-bootstrap";
import FormControl from "react-bootstrap/FormControl";
import { connect } from 'react-redux'
import {setShowModal, setHideModal} from '../store/actions/actions'
import LogReg from '../containers/logreg'


class Header extends React.Component {




  
  render() {
    
    const userLogin = <ButtonGroup>
    <DropdownButton as={ButtonGroup} title="Dropdown" id="bg-nested-dropdown">
    <Dropdown.Item eventKey="1">Profile</Dropdown.Item>
    <Dropdown.Item eventKey="2">My Purchases</Dropdown.Item>
  </DropdownButton>
  </ButtonGroup>

const logReg = <ButtonToolbar>
<Button
  variant="primary"
  onClick={this.props.setShowModal}
>
  Sign in/sign Up
</Button>

<LogReg />
</ButtonToolbar>

    return (
      <Navbar bg="dark" expand="lg" >
        <Navbar.Brand href="/home" className="mr-auto">
          <img width="25%" src="./Images/BookStore.png" alt="" />
        </Navbar.Brand>
        <div>
          <Form inline>
              {this.props.isLogin ? userLogin : logReg}
          </Form>
        </div>
      </Navbar>
    );
  }
};


function mapStateToProps(state) {
  return {
      showModal: state.showModal,
      isLogin: state.isLogin
  }
}

function mapDispatchToProps(dispatch) {
  return {
      setShowModal: () => dispatch(setShowModal()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)