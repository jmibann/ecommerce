import React from "react";
import { ButtonGroup, Button, Divider, Nav } from "react-bootstrap";
export default () => {
  return (
    <ButtonGroup vertical>
      <Button>Los Mas Vendidoss</Button>
      <Button>Menor Precio</Button>
      <Button>Mayor Precio</Button>
      <Button>Año de publicacion</Button>

    </ButtonGroup>
  );
};

// export default () => {
//   return (
//     <Nav defaultActiveKey="/home" className="flex-column">
//       <Nav.Link href="/home">Active</Nav.Link>
//       <Nav.Link>Link</Nav.Link>
//       <Nav.Link>Link</Nav.Link>
//       <Nav.Link>Disabled</Nav.Link>
//     </Nav>
//   );
// };
