import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';

export default () => {
  return (
    <Navbar bg="light" expand="lg" className='space-between'>
      <Navbar.Brand href="#home" className='mr-auto'>
        <img
          src="./Logo.jpg"
          alt=""
        />
      </Navbar.Brand>
      <div>
        <Form>
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
