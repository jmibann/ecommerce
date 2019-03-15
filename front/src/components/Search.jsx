import React from "react";
import { ButtonGroup, Button, Divider, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
export default () => {
  return (
      <div>
    <ButtonGroup vertical>
      <Link to="/searchBooks">
        <Button>Los Mas Vendidoss</Button>
      </Link>
      <Button>Menor Precio</Button>
      <Button>Mayor Precio</Button>
      <Button>Año de publicacion</Button>
    </ButtonGroup>
      </div>
      
    
  );
  
};