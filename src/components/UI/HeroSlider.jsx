import React from "react";

import Slider from "react-slick";
import { Container } from "reactstrap";
import { Link } from "react-router-dom";

import "../../styles/hero-slider.css";

const HeroSlider = () => {
  const settings = {
    // fade: true,
    // speed: 2000,
    // autoplaySpeed: 3000,
    // infinite: true,
    // autoplay: true,
    // slidesToShow: 1,
    // slidesToScroll: 1,
    // pauseOnHover: false,
  };
  return (
    <Slider {...settings} className="hero__slider">
      <div className="slider__item slider__item-01 mt0">
        <Container>
          <div className="slider__content ">
            
            <h1 className="text-light mb-4">Verkaufen Sie Ihr Auto sofort</h1>
            <h2 className="text-light mb-3">Gratis</h2>

            <button className="btn reserve__btn mt-6">
              <Link to="/cars">Reserve Now</Link>
            </button>
      
            <h1 className="text-light mb-4">Schnell. Sicher. Top Preis</h1>

          </div>
        </Container>
      </div>

    </Slider>
  );
};

export default HeroSlider;
