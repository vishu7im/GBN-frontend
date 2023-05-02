import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.css"; // import your custom CSS file here

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="h-2/5 w-full ">
      <Slider {...settings}>
        <div>
          <img
            src="http://gpnilokheri.ac.in/assets/img/slide/slider3.jpg"
            alt="Carousel "
          />
        </div>
        <div>
          <img
            src="http://gpnilokheri.ac.in/assets/img/slide/slider1.jpg"
            alt="Carousel "
          />
        </div>
        <div>
          <img
            src="http://gpnilokheri.ac.in/assets/img/slide/slider2.jpg"
            alt="Carousel "
          />
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
