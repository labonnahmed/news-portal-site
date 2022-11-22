import React from 'react';
import { Carousel } from 'react-bootstrap';
import bannerOne from '../../image/banner-1.jpg';
import bannerTwo from '../../image/banner-2.png';
import bannerThree from '../../image/banner-3.jpg'

const Header = () => {
    const imageSize= {
        height: '500px'
    }
    return (
        <Carousel variant="dark">
          <Carousel.Item>
            <img
              style={imageSize}
              className="d-block w-100"
              src={bannerOne}
              alt="First slide"
            />
            <Carousel.Caption>
              <h4>Breakign News</h4>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              style={imageSize}
              className="d-block w-100"
              src={bannerTwo}
              alt="Second slide"
            />
            <Carousel.Caption>
              <h4>Latest News</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              style={imageSize}
              className="d-block w-100"
              src={bannerThree}
              alt="Third slide"
            />
            <Carousel.Caption>
              <h4>Hot News</h4>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      );
};

export default Header;