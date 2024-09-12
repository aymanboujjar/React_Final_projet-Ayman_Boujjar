import React from 'react';
import Slider from "react-slick";
import images from "../../constant/images";
import data from "../../json/data.json";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

const PrevArrow = ({ onClick }) => {
  return (
    <button
      className="absolute text-3xl left-2 top-1/2 transform -translate-y-1/2 z-10 text-black rounded-full p-2"
      onClick={onClick}
    >
      <FaArrowCircleLeft />
    </button>
  );
};

const NextArrow = ({ onClick }) => {
  return (
    <button
      className="absolute text-3xl right-2 top-1/2 transform -translate-y-1/2 z-10 text-black rounded-full p-2"
      onClick={onClick}
    >
      <FaArrowCircleRight />
    </button>
  );
};
const Carousel2 = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4, 
    slidesToScroll: 4,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      
      {
        breakpoint: 768, 
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <>
    <div className='mt-10 flex justify-center items-center'>
      <h1 className='text-4xl font-extrabold mb'>FEATURED PRODUCTS</h1>
    </div>
    <div className="slider-container overflow-hidden ">
      <Slider className='px-10' {...settings}>
        {data.map((e, i) => (
          <div key={i} className="p-2"> 
            <img src={images[e.image]} alt={e.title} className="w-full h-auto" />
            <h1>{e.title}</h1>
            <p>{e.price}</p>
          </div>
        ))}
      </Slider>
    </div>
    </>

  );
};

export default Carousel2;
