import React from 'react';
import { Images } from '../../constant';
import Data from "../../json/data.json"
const Section = () => {
    const randomIndex = Math.floor(Math.random() * Data.length); 
    const randomElement = Data[randomIndex]; 
    
    return (
        <div className='flex gap-x-5 mt-10 px-48 bg-[#f2f2f2] py-10 '>
           <div className="relative w-[50%] h-[80vh] overflow-hidden">
  <img
    className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-110"
    src={Images.banner}
    alt=""
  />
  <div className="absolute flex flex-col">
    <h1 className="absolute left-[9vw] text-center w-[18vw] text-white bottom-[40vh] text-5xl font-bold">
      The Beauty
    </h1>
    <h1 className="absolute left-[3vw] text-center w-[5vw] text-white bottom-[30vh] text-7xl font-extrabold">
      LOOKBOOK
    </h1>
    <p className="absolute left-[7vw] text-center w-[20vw] text-3xl text-white bottom-[20vh]">
      VIEW COLLECTION
    </p>
  </div>
</div>

            <div className='w-[50%] flex flex-col  items-center bg-white h-[80vh]'>
                <img className='w-[100%] h-[80%]' src={Images[randomElement.image]} alt="" />
                <h1>{randomElement.title}</h1>
                <h1>{randomElement.price}</h1>
                <div className='flex gap-x-4'>
                    <div className='border border-black p-2 w-5  pr-12 text-center'>-2082 days</div>
                    <div className='border border-black p-2 w-5  pr-12 ps-6 text-center'>-18 hrs</div>
                    <div className='border border-black p-2 w-5  pr-12 ps-6 text-center'>-59 mins</div>
                    <div className='border border-black p-2 w-5  pr-12 ps-6 text-center'>-11 secs</div>
                </div>
            </div>
        </div>
    );
};

export default Section;