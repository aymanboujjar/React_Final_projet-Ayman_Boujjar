import React from 'react';
import { Images } from '../constant';


export const About = () => {
    return (
        <div className='flex flex-col gap-[8vh] pb-[8vh] '>
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
                <div className='absolute inset-0 bg-black opacity-50' ></div>

                <p className='text-[50px] text-white font-bold text-center relative'>
                    ABOUT
                </p>
            </div>

            <div className='flex bgdiv gap-7'>
            <div className='relative overflow-hidden'>
        <img className='w-[100%] transition-transform duration-500 ease-in-out hover:scale-110' src={Images.shopy4} alt="" />
            </div>
                <div className='flex flex-col gap-9'>
                    <p className='text-[25px]  '>OUR STORY</p>
                    <p className='w-[65vw] text-[#888888]'>Phasellus egestas nisi nisi, lobortis ultricies risus semper nec. Vestibulum pharetra ac ante ut pellentesque. Curabitur fringilla dolor quis lorem accumsan, vitae molestie urna dapibus. Pellentesque porta est ac neque bibendum viverra. Vivamus lobortis magna ut interdum laoreet. Donec gravida lorem elit, quis condimentum ex semper sit amet. Fusce eget ligula magna. Aliquam aliquam imperdiet sodales. Ut fringilla turpis in vehicula vehicula. Pellentesque congue ac orci ut gravida. Aliquam erat volutpat. Donec iaculis lectus a arcu facilisis, eu sodales lectus sagittis. Etiam pellentesque, magna vel dictum rutrum, neque justo eleifend elit, vel tincidunt erat arcu ut sem. Sed rutrum, turpis ut commodo efficitur, quam velit convallis ipsum, et maximus enim ligula ac ligula. Vivamus tristique vulputate ultricies. Sed vitae ultrices orci.</p>
                    <div className='flex flex-col gap-5 relative'>
                        <p className='text-[#888888] px-7'>Creativity is just connecting things. When you ask creative people how they did something, they feel a little guilty because they didn't really do it, they just saw something. It seemed obvious to them after a while.</p>
                        <p className='text-[#888888] px-7'>- Steve Job’s</p>
                        <div className='absolute top-0 bottom-0 left-[-1px] w-[1px]  bg-gray-300'></div>

                    </div>


                </div>
            </div>
        </div>
    );
};