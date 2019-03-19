/* eslint-disable react/no-this-in-sfc */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const test = [
  { name: 'categoria 1' },
  { name: 'categoria 2' },
  { name: 'categoria 3' },
  { name: 'test' },
];
export default (props) => {
  const SetChange = (e) => {
    props.setSearch(e.target.value);
  };
  return (
    <Navbar bg="light" expand="lg" width="10px">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <NavDropdown title="categories" id="basic-nav-dropdown">
            {test.map(items => (
              <div key={items.name}>
                <Nav.Link href="#home">
                  {items.name}
                </Nav.Link>
              </div>
            ))}
          </NavDropdown>
        </Nav>
        <Form inline onSubmit={props.handleSubmit}>
          <FormControl
            size="sm"
            value={props.SearchQuery}
            onChange={SetChange}
            style={{ width: '190px' }}
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
