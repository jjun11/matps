import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const StoreSlider = ({ images }) => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...sliderSettings}>
      {images.map((imgUrl, index) => (
        <div key={index}>
          <img
            alt={`이미지 ${index + 1}`}
            src={imgUrl}
            style={{ width: "200px", height: "200px" }}
          />
        </div>
      ))}
    </Slider>
  );
};

export default StoreSlider;
