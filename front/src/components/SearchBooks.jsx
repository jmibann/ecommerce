import React from "react";

const test = [
  {
    name: "Lexie",
    breed: "Goldendoodle",
    id: 1
  },
  {
    name: "Cody",
    breed: "Pug",
    id: 2
  },
  {
    name: "Ben",
    breed: "Pitbull?",
    id: 3
  }
];
export default () => {
  return (
    <div className="items">
      <h3>Items</h3>
      {test.map(items => {
        <div key={test.id} className="col-xs-4">
          <h5>
            <span>{items.name}</span>
          </h5>
        </div>;
      })}
    </div>
  );
};
