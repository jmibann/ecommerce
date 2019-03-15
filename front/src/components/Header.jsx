import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
      <Navbar bg="dark" expand="lg">
        <Navbar.Brand href="/home" className="mr-auto">
          <img width="25%" src="./Logo.jpg" alt="" />
        </Navbar.Brand>
        <div>
          <Form inline>
            <Link to="/log">
              <Button size="sm">Sign in/sign Up</Button>
            </Link>
          </Form>
        </div>
      </Navbar>
    );
  }
}

export default Header;
