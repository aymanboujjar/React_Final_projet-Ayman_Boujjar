import React from 'react';
import { Images } from '../../../constant';

const Cards = () => {
    return (
        <div className='flex px-11'>
            <div className='flex flex-col gap-y-6 ml-16'>
                <div className='relative group overflow-hidden w-[80%] h-[400px]'>
                    <img
                        src={Images.card1}
                        alt=""
                        className="w-full h-full object-cover transition-transform duration-500 ease-in-out transform group-hover:scale-110"
                    />
                    <button className='absolute bottom-5 left-[18%] border bg-white py-2 px-14'>
                        DRESSES
                    </button>
                </div>
                <div className='relative group overflow-hidden w-[80%] h-[400px]'>
                    <img
                        src={Images.card4}
                        alt=""
                        className="w-full h-full object-cover transition-transform duration-500 ease-in-out transform group-hover:scale-110"
                    />
                    <button className='absolute bottom-5 left-[15%] border bg-white py-2 px-14'>
                        SUNGLASSES
                    </button>
                </div>
            </div>
            <div className='flex flex-col gap-y-6'>
                <div className='relative group overflow-hidden w-[80%] h-[400px]'>
                    <img
                        src={Images.card2}
                        alt=""
                        className="w-full h-full object-cover transition-transform duration-500 ease-in-out transform group-hover:scale-110"
                    />
                    <button className='absolute bottom-5 left-[20%] border bg-white py-2 px-14'>
                        WATCHES
                    </button>
                </div>
                <div className='relative group overflow-hidden w-[80%] h-[400px]'>
                    <img
                        src={Images.card5}
                        alt=""
                        className="w-full h-full object-cover transition-transform duration-500 ease-in-out transform group-hover:scale-110"
                    />
                    <button className='absolute bottom-5 left-[16%] border bg-white py-2 px-14'>
                        FOOTERWEAR
                    </button>
                </div>
            </div>
            <div className='flex flex-col gap-y-6'>
                <div className='relative group overflow-hidden w-[80%] h-[400px]'>
                    <img
                        src={Images.card3}
                        alt=""
                        className="w-full h-full object-cover transition-transform duration-500 ease-in-out transform group-hover:scale-110"
                    />
                    <button className='absolute bottom-5 left-[26%] border bg-white py-2 px-16'>
                        BAGS
                    </button>
                </div>
                <div className='relative group overflow-hidden w-[80%] h-[400px]'>
                    <img
                        src={Images.card6}
                        alt=""
                        className="w-full h-full object-cover transition-transform duration-500 ease-in-out transform group-hover:scale-110"
                    />
                    <button className='absolute bottom-5 left-[18%] border bg-white py-2 px-14'>
                        ACCESSORIES
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Cards;
