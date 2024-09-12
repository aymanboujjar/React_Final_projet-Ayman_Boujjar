import React from 'react';
import { Images } from '../../../constant';

const Blog = () => {
    return (
        <div className='flex flex-col gap-y-5 items-center justify-center mt-5'>
            <h1 className='text-3xl font-bold'>OUR BLOG</h1>
            <div className='flex gap-8 px-24'>
                <div className='w-[30%] flex flex-col gap-y-3 ml-8'>
                    <div className='relative overflow-hidden'>
                        <img 
                            src={Images.blog1} 
                            alt="" 
                            className="w-full h-full object-cover transition-transform duration-500 ease-in-out transform hover:scale-110" 
                        />
                    </div>
                    <h1 className='text-xl'>Black Friday Guide: Best Sales & Discount Codes</h1>
                    <h6>by fashe-theme Admin on Dec 28, 2017</h6>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed turpis sed lorem dignissim vulputate nec cursus ante. Nunc sit...</p>
                </div>    

                <div className='w-[30%] flex flex-col gap-y-3'>
                    <div className='relative overflow-hidden'>
                        <img 
                            src={Images.blog2} 
                            alt="" 
                            className="w-full h-full object-cover transition-transform duration-500 ease-in-out transform hover:scale-110" 
                        />
                    </div>
                    <h1 className='text-xl'>The White Sneakers Nearly Every Fashion Girls Own</h1>
                    <h6>by fashe-theme Admin on Dec 28, 2017</h6>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed turpis sed lorem dignissim vulputate nec cursus ante. Nunc sit...</p>
                </div>    

                <div className='w-[30%] flex flex-col gap-y-3'>
                    <div className='relative overflow-hidden'>
                        <img 
                            src={Images.blog3} 
                            alt="" 
                            className="w-full h-full object-cover transition-transform duration-500 ease-in-out transform hover:scale-110" 
                        />
                    </div>
                    <h1 className='text-xl'>New York SS 2018 Street Style: By Annina Mislin</h1>
                    <h6>by fashe-theme Admin on Dec 28, 2017</h6>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed turpis sed lorem dignissim vulputate nec cursus ante. Nunc sit...</p>
                </div>    
            </div>
        </div>
    );
};

export default Blog;
