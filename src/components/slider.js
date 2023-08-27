import React, { useState } from "react";
import Slider from "react-slick"
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import tv from "../images/tv1.png"

import "../App.css"


const NextArrow = ({onClick}) => {
    return (
        <div className="nextArrow flex" onClick={onClick}>
           <p className="text-xl">Next</p> <BsChevronRight />
        </div>
    )
}

const PrevArrow = ({onClick}) =>{
    return(
        <div className="prevArrow flex" onClick={onClick}>
            <BsChevronLeft /><p className="text-xl">Prev</p>
            
        </div>
    )
}


const ImageSlider = ({ images}) => {
  
  const [imageIndex, setImageIndex] = useState(0);

    
  const settings = {
    centerMode: false,
    infinite: true,
    dots: false,
    speed: 300,
    
    centerPadding: "0",
    swipeToSlide: true,
    focusOnSelect: true,
    vertical: true,
    autoplay : false,
    nextArrow: <NextArrow onClick />,
    prevArrow: <PrevArrow onClick />,
    beforeChange: (current, next) => setImageIndex(next),
    responsive: [
      {
        breakpoint: 1490,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 820,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }


const templateImages = images.map((image, idx) => {
    return (
      <div
        className={idx === imageIndex ? "ml-[66vh]  " : "slide " }
        key={image.id}
      >
        <div className="slideWrapper  rounded-lg shrink w-[60vh] h-[35vh] ">
          {image.code ? image.code : <img src={image.src} alt={image.alt} className=" h-[40vh] w-[60vh]" />}
        </div>
      </div>
    );
  });

  return (
    <div className="w-[100%] h-[70vh] ">
      <div className="absolute w-[100vh] h-[60v] ml-[59vh]  "><img src={tv} alt="" className="w-[93vh] h-[55vh] mt-10" ></img></div>
      <div><Slider {...settings} className="relative py-24 p-2">{templateImages}</Slider>;</div>
  
  
  </div>

  )
};

export default ImageSlider;