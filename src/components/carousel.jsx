"use client"

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = ({ images }) => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true,
      autoplay: true,
      autoplaySpeed: 2000,
      arrows: false // Hide navigation arrows
    };
  
    return (
      <div className="mx-auto">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index} className="h-56 md:w-96 md:h-64 lg:w-[500px] lg:h-[350px] xl:w-[600px] xl:h-[420px] mx-auto">
              <img src={image} alt={`carousel-${index}`} className="h-full" />
            </div>
          ))}
        </Slider>
      </div>
    );
};

export default Carousel;

