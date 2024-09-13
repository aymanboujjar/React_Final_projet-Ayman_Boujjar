import React from 'react';
import { Images } from '../constant';

export const Contact = () => {
    return (
        <div className=''>
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
                    CONTACT
                </p>
            </div>
            <div className='flex  bgdiv items-center justify-center'>
                <div class="rounded-lg overflow-hidden">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11672.945750644447!2d-122.42107853750231!3d37.7730507907087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858070cc2fbd55%3A0xa71491d736f62d5c!2sGolden%20Gate%20Bridge!5e0!3m2!1sen!2sus!4v1619524992238!5m2!1sen!2sus"
                         height={480} className='w-[40vw]' allowfullscreen="" loading="lazy"></iframe>
                </div>



                <div class="flex items-center justify-center p-12">
                
                    <div class="mx-auto w-full  bg-white">
                         <p className='text-[30px] text-[#333333] pb-9 '>Send us your message</p>
                        <form  >
                            <div class="mb-5">
                              
                                <input type="text" id="name" placeholder="name"
                                    class=" rounded-md   bg-white py-3 px-6 text-base font-medium text-[#757c82] outline-none  w-[40vw]" />
                            </div>
                            <div class="mb-5">
                                
                                <input type="email"  id="email" placeholder="email"
                                    class=" rounded-md  bg-white py-3 px-6 text-base font-medium text-[#757c82] outline-none   w-[40vw]" />
                            </div>
                            <div class="mb-5">
                               
                                <input type="number"  id="subject" placeholder="phone"
                                    class=" rounded-md  bg-white py-3 px-6 text-base font-medium text-[#757c82] outline-none   w-[40vw]" />
                            </div>
                            <div class="mb-5">
                               
                                <textarea rows="4"  id="message" placeholder="Type your message"
                                    class=" resize-none rounded-md  bg-white py-3 px-6 text-base font-medium text-[#757c82] outline-none   w-[40vw]"></textarea>
                            </div>
                            <div>
                                <button
                                    class="hover:shadow-form rounded-full bg-black py-3 px-12 text-base font-semibold text-white outline-none">
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