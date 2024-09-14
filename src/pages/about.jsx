import React from 'react';
import { Images } from '../constant';

export const About = () => {
    return (
        <div className='flex flex-col gap-8 pb-8 px-4'>
            {/* Hero Section */}
            <div
                className='flex justify-center items-center relative mt-5'
                style={{
                    backgroundImage: `url(${Images.aboutimage})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    height: '30vh',
                    backgroundRepeat: 'no-repeat',
                }}
            >
                <div className='absolute inset-0 bg-black opacity-50'></div>
                <p className='text-[30px] sm:text-[40px] md:text-[50px] text-white font-bold text-center relative'>
                    ABOUT
                </p>
            </div>

            <div className='flex flex-col md:flex-row md:items-center   '>
                <div className='relative overflow-hidden md:w-1/2 '>
                    <img className='w-full md:w-[50%] transition-transform duration-500 ease-in-out hover:scale-110' src={Images.shopy4} alt="" />
                </div>
                <div className='flex flex-col gap-7 w-full md:w-1/2'>
                    <p className='text-[20px] md:text-[25px] font-semibold'>OUR STORY</p>
                    <p className='text-[#888888] text-sm md:text-base'>
                        Phasellus egestas nisi nisi, lobortis ultricies risus semper nec. Vestibulum pharetra ac ante ut pellentesque. Curabitur fringilla dolor quis lorem accumsan, vitae molestie urna dapibus. Pellentesque porta est ac neque bibendum viverra. Vivamus lobortis magna ut interdum laoreet. Donec gravida lorem elit, quis condimentum ex semper sit amet. Fusce eget ligula magna. Aliquam aliquam imperdiet sodales. Ut fringilla turpis in vehicula vehicula. Pellentesque congue ac orci ut gravida. Aliquam erat volutpat. Donec iaculis lectus a arcu facilisis, eu sodales lectus sagittis. Etiam pellentesque, magna vel dictum rutrum, neque justo eleifend elit, vel tincidunt erat arcu ut sem. Sed rutrum, turpis ut commodo efficitur, quam velit convallis ipsum, et maximus enim ligula ac ligula. Vivamus tristique vulputate ultricies. Sed vitae ultrices orci.
                    </p>
                    <div className='flex flex-col gap-5 relative'>
                        <p className='text-[#888888] text-sm md:text-base px-4 md:px-7'>
                            Creativity is just connecting things. When you ask creative people how they did something, they feel a little guilty because they didn't really do it, they just saw something. It seemed obvious to them after a while.
                        </p>
                        <p className='text-[#888888] text-sm md:text-base px-4 md:px-7'>
                            - Steve Jobs
                        </p>
                        <div className='absolute top-0 bottom-0 left-[-1px] w-[1px] bg-gray-300 hidden md:block'></div>
                    </div>
                </div>
            </div>
        </div>
    );
};
