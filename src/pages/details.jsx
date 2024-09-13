import React, { useState } from 'react';
import data from "../json/data.json";
import Slider from "react-slick";
import { Images } from '../constant';
import { useParams ,  } from 'react-router-dom';
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

const Details = () => {
    const { id } = useParams();

    const Data = data.find(e => e.id === id);
    const dat =  data.filter(e => e.id !== id);
    const [count, setCount] = useState(1)
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
        <div className='flex items-center justify-center ml-60'>
        <div className='flex mt-8'>
            <div className='w-[40%] flex flex-col gap-y-4'>

            {data.map((e, i) => (
                <img key={i} className='w-[80%]' src={Images[e.image]} alt="" />
            ))}
            </div>
            
            <div className='flex gap-x-5  '>
                <img className='w-[45%] h-[60%]' src={Images[Data.image]} alt="" />
                <div className=' flex flex-col gap-y-8 mt-3 w-[40%]'>
                    <h1>{Data.title}</h1>
                    <h1>{Data.price}</h1>
                    <h1>{Data.about}</h1>
                    <div className='flex gap-x-3'>
                        <p>S</p>
                        <p>M</p>
                        <p>L</p>
                        <p>XL</p>
                    </div>
                    <div className='flex gap-x-5'>
                        <div className='bg-red-700 w-14 h-9 border border-red-700'></div>
                        <div className='bg-gray-600 w-14 h-9 border border-red-700'></div>
                        <div className='bg-black w-14 h-9 border border-red-700'></div>
                    </div>
                    <div className='flex gap-x-5'>
                <div className="flex space-x-4">
                    <button
                        onClick={() =>count>1? setCount(count - 1):setCount(count)}
                        className="px-4 py-2  bg-[#e6e6e6] border rounded  "
                    >
                        -
                    </button>
                    <h1 className="text-3xl font-bold mt-2  bg-white "> {count}</h1>

                    <button
                        onClick={() => setCount(count + 1)}
                        className="px-4 py-2 b bg-[#e6e6e6] border  rounded  "
                    >
                        +
                    </button>
                </div>
                
                    <button className='text-white bg-black p-4 rounded-full'>add to cart</button>
                    </div>
                <div className='flex gap-x-5'>
                <p>brand: {Data.brand}</p>
                <p>categories : {Data.categories}</p>
                </div>
                <h3>Description</h3>
                <p>{Data.description}</p>
                <h3>additional Infromations</h3>
                <p>{Data['additional Infromations']}</p>
                </div>
            </div>
            

        </div>
        </div>

            <div>
            <div className='mt-10 flex justify-center items-center'>
    </div>
    <div className="slider-container overflow-hidden ">
      <Slider className='px-10' {...settings}>
        {dat.map((e, i) => (
          <div key={i} className="p-2"> 
            <img src={Images[e.image]} alt={e.title} className="w-full h-auto" />
            <h1>{e.title}</h1>
            <p>{e.price}</p>
           
          </div>
        ))}
      </Slider>
    </div>
            </div>

        </>

    );
};

export default Details;
