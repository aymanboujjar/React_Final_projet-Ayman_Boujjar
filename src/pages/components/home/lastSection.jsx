import React from 'react';

const LastSection = () => {
    return (
        <div className='flex flex-col mt-10 gap-y-5 items-center px-4'>
            <h1 className='text-3xl font-bold text-center'>@ FOLLOW US ON INSTAGRAM</h1>
            <div className='flex flex-col md:flex-row items-center justify-center gap-y-8 md:gap-x-28 w-full'>
                <div className='flex flex-col items-center'>
                    <p className='text-center'>Free Delivery Worldwide</p>
                    <i className='text-center text-sm'>Mirum est notare quam littera gothica</i>
                </div>
                <div className='flex flex-col items-center  md:border-l-2 md:border-r-2 border-black px-4 md:px-14'>
                    <p className='text-center'>30 Days Return</p>
                    <i className='text-center text-sm'>Simply return it within 30 days for an exchange</i>
                </div>
                <div className='flex flex-col items-center'>
                    <p className='text-center'>Store Opening</p>
                    <i className='text-center text-sm'>Shop open from Monday to Sunday</i>
                </div>
            </div>
        </div>
    );
};

export default LastSection;
