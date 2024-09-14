import React from 'react';
import { Images } from '../constant';

export const Contact = () => {
    return (
        <div className='flex flex-col gap-8 pb-8 px-4'>
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
                    CONTACT
                </p>
            </div>

            <div className='flex flex-col md:flex-row gap-4'>
                <div className='w-full md:w-1/2 md:mt-16 md:ml-20'>
                    <div className='rounded-lg overflow-hidden'>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11672.945750644447!2d-122.42107853750231!3d37.7730507907087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858070cc2fbd55%3A0xa71491d736f62d5c!2sGolden%20Gate%20Bridge!5e0!3m2!1sen!2sus!4v1619524992238!5m2!1sen!2sus"
                            height="480" className='w-full' allowFullScreen="" loading="lazy"></iframe>
                    </div>
                </div>

                <div className='w-full md:w-1/2 flex items-center justify-center p-4 md:p-12'>
                    <div className='mx-auto w-full max-w-lg bg-white p-6 rounded-lg shadow-lg'>
                        <p className='text-[20px] md:text-[30px] text-[#333333] pb-6'>Send us your message</p>
                        <form>
                            <div className='mb-4'>
                                <input
                                    type="text"
                                    id="name"
                                    placeholder="Name"
                                    className='w-full rounded-md bg-white py-3 px-4 text-base font-medium text-[#757c82] outline-none'
                                />
                            </div>
                            <div className='mb-4'>
                                <input
                                    type="email"
                                    id="email"
                                    placeholder="Email"
                                    className='w-full rounded-md bg-white py-3 px-4 text-base font-medium text-[#757c82] outline-none'
                                />
                            </div>
                            <div className='mb-4'>
                                <input
                                    type="number"
                                    id="phone"
                                    placeholder="Phone"
                                    className='w-full rounded-md bg-white py-3 px-4 text-base font-medium text-[#757c82] outline-none'
                                />
                            </div>
                            <div className='mb-4'>
                                <textarea
                                    rows="4"
                                    id="message"
                                    placeholder="Type your message"
                                    className='w-full resize-none rounded-md bg-white py-3 px-4 text-base font-medium text-[#757c82] outline-none'
                                ></textarea>
                            </div>
                            <div>
                                <button
                                    type="submit"
                                    className='hover:shadow-form rounded-full bg-black py-3 px-6 text-base font-semibold text-white outline-none'
                                >
                                    SEND
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};
