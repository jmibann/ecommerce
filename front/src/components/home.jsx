import React from 'react';
import { Link } from 'react-router-dom'
import { Carousel } from 'react-bootstrap'



export default class Home extends React.Component {
  render() {
    return (
      <div><Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src="/Images/Carusel 1.jpg" alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="/Images/Carusel 2.jpg" alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="/Images/Carusel 3.jpg" alt="Mattonit's item" />
        </Carousel.Item>
      </Carousel>
      </div>)
  }
}