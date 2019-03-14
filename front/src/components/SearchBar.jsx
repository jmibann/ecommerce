import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
const test = [
  { name: "test1" },
  { name: "test2" },
  { name: "test3" },
  { name: "test" }
];

export default (props) => {
  console.log(props)
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <NavDropdown title="categories" id="basic-nav-dropdown">
            {test.map(items => {
              return <Nav.Link href="#home">{items.name}</Nav.Link>;
            })}
          </NavDropdown>
        </Nav>
        <Form inline>
          <FormControl
            style={{ width: "190px" }}
            type="text"
            placeholder="Search"
            className="mr-sm-2"
          />
          <Button  variant="outline-success">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
};
