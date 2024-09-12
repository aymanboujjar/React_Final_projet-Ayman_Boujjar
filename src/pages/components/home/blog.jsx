import React from 'react';
import { Images } from '../../../constant';

const Blog = () => {
    return (
        <div className='flex flex-col gap-y-5 items-center justify-center mt-5'>
         <h1 className='text-3xl font-bold'>OUR BLOG</h1>
         <div className='flex gap-8 px-24 '>
            
        <div className='w-[30%] flex flex-col gap-y-3 ml-8'>
            <img src={Images.blog1} alt="" />
            <h1 className='text-xl'>Black Friday Guide: Best Sales & Discount Codes</h1>
            <h6 className=''>by fashe-theme Admin on Dec 28,2017</h6>
            <p className=''>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed turpis sed lorem dignissim vulputate nec cursus ante. Nunc sit...</p>
        </div>    
        <div className='w-[30%] flex flex-col gap-y-3'>
            <img src={Images.blog2} alt="" />
            <h1 className='text-xl'>The White Sneakers Nearly Every Fashion Girls Own</h1>
            <h6 className=''>by fashe-theme Admin on Dec 28,2017</h6>
            <p className=''>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed turpis sed lorem dignissim vulputate nec cursus ante. Nunc sit...</p>
        </div>    
        <div className='w-[30%] flex flex-col gap-y-3'>
            <img src={Images.blog3} alt="" />
            <h1 className='text-xl'>New York SS 2018 Street Style: By Annina Mislin</h1>
            <h6 className=''>by fashe-theme Admin on Dec 28,2017</h6>
            <p className=''>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed turpis sed lorem dignissim vulputate nec cursus ante. Nunc sit...</p>
        </div>    
        </div>

        </div>
    );
};

export default Blog;