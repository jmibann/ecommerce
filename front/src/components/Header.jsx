import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";

export default () => {
  return (
    <Navbar bg="light" expand="lg" className="space-between">
      <Navbar.Brand href="#home" className="mr-auto">
        <img width="35%" src="./Logo.jpg" alt="" />
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
            className=" mr-sm-4"
          />
          <Button type="submit">sign in</Button>
          {/* <InputGroup.Prepend> */}
          <div>
            <a href="www.gooogle.com">New Customer?Click here</a>
          </div>

          {/* </InputGroup.Prepend> */}
        </Form>
      </div>
    </Navbar>
  );
};
