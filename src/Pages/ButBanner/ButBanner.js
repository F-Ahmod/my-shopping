import React from 'react';
import './ButBanner.css'
import img from '../images/banner-1.jpg'
import { Carousel } from 'react-bootstrap';

const ButBanner = () => {
    return (
        <div className="m-5  round-5">
         <Carousel fade>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img}
      alt="First slide"
    />
    <Carousel.Caption>
      <h2 className="text-dark">Black Friday is a pretty polarizing holiday</h2>
      <p className="text-dark">Whoever said that money can't buy happiness simply didn't know where to go shopping</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h2 className="text-dark">Black Friday is a colloquial term for the Friday </h2>
      <p className="text-dark">Walmart leaked its own early Black Friday sales.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h2 className="text-dark"> always say shopping is cheaper than a psychiatrist.</h2>
      <p className="text-dark">Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

            
        </div>
    );
};

export default ButBanner;