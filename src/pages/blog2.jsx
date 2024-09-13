import React from 'react';
import { Images } from '../constant';
import data  from "../json/data.json"
import { IoSearch } from "react-icons/io5";
import { FaLongArrowAltRight } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const Blog2 = () => {
    const navigate=useNavigate()

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
                <div className='absolute inset-0 bg-black opacity-50' ></div>

                <p className='text-[50px] text-white font-bold text-center relative'>
                    News
                </p>
            </div>
        <div className='flex justify-center items-start gap-x-20'>

        <div className='flex flex-col  justify-around mt-5 w-[60%] gap-y-12'>

        <div className=' h-fit flex flex-col gap-y-3 '>
            <div className='relative overflow-hidden'>
        <img className='w-[100%] transition-transform duration-500 ease-in-out hover:scale-110' src={Images.blog3} alt="" />
            </div>
        <h1>New York SS 2018 Street Style: By Annina Mislin</h1>
        <h6>by fashe-theme Admin | crafts, street style | 1 Comments</h6>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed turpis sed lorem dignissim vulputate nec cursus ante. Nunc sit...</p>
        <button className='flex items-center gap-x-3'>Continue Reading <FaLongArrowAltRight /></button>
        </div>
        <div className='flex items-center justify-center gap-x-9'>
                    <button onClick={()=>navigate("/blog")} className=' bg-white text-black hover:bg-black hover:text-white rounded-full w-10 p-2 px-4' >1</button>
                    <button onClick={()=>navigate("/blog2")} className='bg-black text-white rounded-full w-10 p-2 px-4'>2</button>
                    </div>  
        </div>
        <div className='w-[10%] flex flex-col gap-y-4 mr-20 '>
            <input type="search" name="search " placeholder={`search`} className=' w-[20vw] py-3 rounded-full px-4 border-2' id="" />
            <h1>Featured Products</h1>
            <div className='flex flex-col gap-y-4'>
            {data.map((e,i)=>(
                <div className='flex items-start gap-x-5'>
                    <img className='w-[80%]'  src={Images[e.image]} alt="" />
                    <div className=' pt-2'>
                        <h1 className='w-[8vw]'>{e.title}</h1>
                        <p>{e.price}</p>
                    </div>
                </div>
            ))}
            </div>
        </div>
        </div>

        




        </>
    );
};

export default Blog2;