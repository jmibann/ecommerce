import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
const test = [
  { name: "test1" },
  { name: "test2" },
  { name: "test3" },
  { name: "test" }
];
export default props => {
  console.log(props);
  const SetChange = e => {
    this.props.setSearch(e.target.value);
  };
  return (
    <Navbar bg="light" expand="lg" width="10px">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <NavDropdown title="categories" id="basic-nav-dropdown">
            {test.map(items => {
              return (
                <div>
                  <Nav.Link key={items.id} href="#home">
                    {items.name}
                  </Nav.Link>
                </div>
              );
            })}
          </NavDropdown>
        </Nav>
        <Form inline onSubmit={props.handleSubmit}>
          <FormControl
            size="sm"
            value={props.SearchQuery}
            onChange={SetChange}
            style={{ width: "190px" }}
            type="text"
            placeholder="Search"
            className="mr-sm-2"
          />
          <Link to="/Search">
            <Button size="sm" type="submit" variant="outline-success">
              Search
            </Button>
          </Link>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
};
