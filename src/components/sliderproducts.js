import React from "react";
import Slider from "react-slick";
import { allproducts } from "./datafilter";
import Productcard from "./productcard";
import { useState, useEffect } from "react";
const Sliderproducts = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <div>
        {/* --header-- */}

        <div>
          <h1 className="  text-2xl font-semibold">Recommendations</h1>
        </div>

        <div>
          <Slider {...settings}>
            {allproducts.map((product, index) => (
              <div>
                <Productcard product={product} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Sliderproducts;
