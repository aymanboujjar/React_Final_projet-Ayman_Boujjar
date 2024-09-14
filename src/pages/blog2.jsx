import React from 'react';
import { Images } from '../constant';
import data from "../json/data.json";
import { FaLongArrowAltRight } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const Blog = () => {
    const navigate = useNavigate();

    return (
        <>
            <div
                className='flex justify-center items-center relative'
                style={{
                    backgroundImage: `url(${Images.blogbanner})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    height: '30vh',
                    backgroundRepeat: 'no-repeat',
                }}
            >
                <div className='absolute inset-0 bg-black opacity-50'></div>
                <p className='text-[30px] sm:text-[50px] text-white font-bold text-center relative'>
                    News
                </p>
            </div>

            <div className='flex flex-col md:flex-row justify-center items-start gap-8 mt-5'>
                <div className='flex flex-col w-full md:w-[50%] gap-y-12'>
                    <div className='h-fit flex flex-col gap-y-3'>
                        <div className='relative overflow-hidden'>
                            <img className='w-full transition-transform duration-500 ease-in-out hover:scale-110' src={Images.blog3} alt="" />
                        </div>
                        <h1 className='text-lg md:text-xl font-bold'>New York SS 2018 Street Style: By Annina Mislin</h1>
                        <h6 className='text-sm md:text-base'>by fashe-theme Admin | crafts, street style | 1 Comments</h6>
                        <p className='text-sm md:text-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed turpis sed lorem dignissim vulputate nec cursus ante. Nunc sit...</p>
                        <button className='flex items-center gap-x-2 text-sm md:text-base'>
                            Continue Reading <FaLongArrowAltRight />
                        </button>
                    </div>
                    <div className='flex items-center justify-center gap-x-4 mt-6'>
            <button onClick={() => navigate("/blog")} className='bg-white text-black hover:bg-black hover:text-white rounded-full w-10 h-10 flex items-center justify-center'>
                    1
                </button>
                <button onClick={() => navigate("/blog2")} className='bg-black text-white rounded-full w-10 h-10 flex items-center justify-center'>
                    2
                </button>
               
            </div>
                </div>

                <div className=' items-start  md:w-[20%] flex flex-col gap-y-4'>   
                    <input
                        type="search"
                        name="search"
                        placeholder={`search`}
                        className='w-full py-2 px-3 rounded-full border-2 text-sm md:text-base'
                    />
                    <h1 className='text-lg md:text-xl font-bold'>Featured Products</h1>
                    <div className='flex flex-col gap-y-4'>
                        {data.map((e, i) => (
                            <div key={i} className='flex gap-x-5 md:flex-row items-start gap-y-4 md:gap-x-4'>
                                <img className='w-[30%] md:w-[40%] h-auto' src={Images[e.image]} alt="" />
                                <div className='pt-2'>
                                    <h1 className='text-sm md:text-base font-semibold'>{e.title}</h1>
                                    <p className='text-sm md:text-base'>{e.price}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

          
        </>
    );
};

export default Blog;
