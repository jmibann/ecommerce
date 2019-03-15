import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

export default () => {
  return (
    <Navbar bg="dark" expand="lg" >
      <Navbar.Brand href="/home" className="mr-auto">
        <img   width="25%" src="./Logo.jpg" alt="" />
      </Navbar.Brand>
      <div>
        <Form inline>
          <Button 
          size="sm"
          type="submit">Sign in/sign Up</Button>
        </Form>
      </div>
    </Navbar>
  );
};
