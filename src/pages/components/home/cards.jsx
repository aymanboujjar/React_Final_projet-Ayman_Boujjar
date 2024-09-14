import React from 'react';
import { Images } from '../../../constant';

const Cards = () => {
    return (
        <div className='flex flex-col md:flex-row px-6 md:px-11 gap-y-6 md:gap-y-0 mt-5'>
            <div className='flex flex-col gap-y-6 md:ml-16'>
                <div className='relative group overflow-hidden'>
                    <img 
                        src={Images.card1} 
                        alt="" 
                        className="w-full  md:w-[80%] md:h-auto transition-transform duration-500 ease-in-out transform group-hover:scale-110"
                    />
                    <button className='absolute bottom-5 left-[18%] md:left-[18%] border bg-white py-2 px-14'>
                        DRESSES
                    </button>
                </div>
                <div className='relative group overflow-hidden'>
                    <img 
                        src={Images.card4} 
                        alt="" 
                        className="w-full  md:w-[80%] md:h-auto transition-transform duration-500 ease-in-out transform group-hover:scale-110"
                    />
                    <button className='absolute bottom-5 left-[15%] md:left-[15%] border bg-white py-2 px-14'>
                        SUNGLASSES
                    </button>
                </div> 
            </div>  
            <div className='flex flex-col gap-y-6'>
                <div className='relative group overflow-hidden'>
                    <img 
                        src={Images.card2} 
                        alt="" 
                        className="w-full  md:w-[80%] md:h-auto transition-transform duration-500 ease-in-out transform group-hover:scale-110"
                    />
                    <button className='absolute bottom-5 left-[20%] md:left-[20%] border bg-white py-2 px-14'>
                        WATCHES
                    </button>
                </div>
                <div className='relative group overflow-hidden'>
                    <img 
                        src={Images.card5} 
                        alt="" 
                        className="w-full  md:w-[80%] md:h-auto transition-transform duration-500 ease-in-out transform group-hover:scale-110"
                    />
                    <button className='absolute bottom-5 left-[16%] md:left-[16%] border bg-white py-2 px-14'>
                        FOOTERWEAR
                    </button>
                </div> 
            </div> 
            <div className='flex flex-col gap-y-6'>
                <div className='relative group overflow-hidden'>
                    <img 
                        src={Images.card3} 
                        alt="" 
                        className="w-full  md:w-[80%] md:h-auto transition-transform duration-500 ease-in-out transform group-hover:scale-110"
                    />
                    <button className='absolute bottom-5 left-[26%] md:left-[26%] border bg-white py-2 px-16'>
                        BAGS
                    </button>
                </div>
                <div className='relative group overflow-hidden'>
                    <img 
                        src={Images.card6} 
                        alt="" 
                        className="w-full  md:w-[80%] md:h-auto transition-transform duration-500 ease-in-out transform group-hover:scale-110"
                    />
                    <button className='absolute bottom-5 left-[18%] md:left-[18%] border bg-white py-2 px-14'>
                        ACCESSORIES
                    </button>
                </div> 
            </div>   
        </div>
    );
};

export default Cards;
