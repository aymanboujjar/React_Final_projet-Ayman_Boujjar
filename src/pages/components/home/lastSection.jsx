import React from 'react';

const LastSection = () => {
    return (
        <div className='flex flex-col mt-5 gap-y-5 items-center'>
            <h1 className='text-3xl font-bold'>@ FOLLOW US ON INSTAGRAM</h1>
            <div className='flex gap-x-28 '>
                <div >
                    <p className='text-center'>Free DElivery Wordlwide</p>
                    <i className='text-center'>Mirum est notare quam littera gothica</i>
                </div>
                <div className='border-l-2 border-r-2 px-14 border-black'>
                    <p className='text-center'>30 Days Return</p>
                    <i className='text-center'>Simply return it within 30 days for an exchange</i>
                </div>
                <div>
                    <p className='text-center'>Store Opening</p>
                    <i className='text-center'>Shop open from Monday to Sunday</i>
                </div>
            </div>
        </div>
    );
};

export default LastSection;