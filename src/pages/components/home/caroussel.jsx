import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import images from "../../../constant/images";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

const PrevArrow = ({ onClick }) => {
  return (
    <button
      className="absolute text-3xl left-10 top-1/2 transform -translate-y-1/2 z-10 text-white rounded-full p-2"
      onClick={onClick}
    >
      <FaArrowCircleLeft />
    </button>
  );
};

const NextArrow = ({ onClick }) => {
  return (
    <button
      className="absolute text-3xl right-10 top-1/2 transform -translate-y-1/2 z-10 text-white rounded-full p-2"
      onClick={onClick}
    >
      <FaArrowCircleRight />
    </button>
  );
};

export default function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <div className="relative w-full">
      <Slider className="overflow-hidden mt-5 he" {...settings}>
        <div className="relative w-full h-[80vh]">
          <img
            className="w-full h-full object-cover"
            src={images.Caroussel1}
            alt="Slide 1"
          />
          <div className="absolute inset-0 flex flex-col gap-y-5 items-center justify-center text-center bg-black bg-opacity-40">
            <h2 className="text-white text-4xl font-bold">Women Collection 2018</h2>
            <p className="text-white mt-2 text-lg">NEW ARRIVALS</p> 
            <button className="bg-white p-3 rounded-full px-7">Shop now</button>
          </div>
        </div>

        <div className="relative w-full h-[80vh]">
          <img
            className="w-full h-full object-cover"
            src={images.Caroussel2}
            alt="Slide 2"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center bg-black bg-opacity-40">
          <h2 className="text-white text-4xl font-bold">Women Collection 2018</h2>
            <p className="text-white mt-2 text-lg">NEW ARRIVALS</p> 
            <button className="bg-white p-3 rounded-full px-7">Shop now</button>
          </div>
        </div>

        <div className="relative w-full h-[80vh]">
          <img
            className="w-full h-full object-cover"
            src={images.Caroussel3}
            alt="Slide 3"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center bg-black bg-opacity-40">
          <h2 className="text-white text-4xl font-bold">Women Collection 2018</h2>
            <p className="text-white mt-2 text-lg">NEW ARRIVALS</p> 
            <button className="bg-white p-3 rounded-full px-7">Shop now</button>
          </div>
        </div>
      </Slider>
    </div>
  );
}
