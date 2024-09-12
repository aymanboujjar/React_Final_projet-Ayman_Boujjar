import React from 'react';

const Footer = () => {
  return (
    <div className='mt-5 sm:mr-72'>
      <footer className="bg-gray-50 flex flex-col items-center">
        <div className="mx-auto flex flex-col gap-y-8 py-10 max-w-screen-xl sm:flex-row sm:gap-x-28">
          <div className="w-full flex-1 max-w-sm sm:ml-0 ml-4">
            <div className="text-gray-500 w-full sm:w-[30vw]">
              <h1 className="text-2xl text-black opacity-1">Get in Touch</h1>
              <p>
                Any questions? Let us know in store at 8th floor, 379 Hudson St,
                New York, NY 10018 or call us on (+1) 96 716 6879
              </p>
            </div>
          </div>

          <div className="w-full flex-1 sm:ml-0 ml-4">
            <div className="mt-4 mb-2 font-medium">CATEGORIES</div>
            <div className="text-gray-500">
              <ul className='space-y-3'>
                <li>men,</li>
                <li>women,</li>
                <li>Dress</li>
                <li>sunglasses</li>
              </ul>
            </div>
          </div>

          <div className="w-full flex-1 sm:ml-0 ml-4">
            <div className="mt-4 mb-2 font-medium">Links</div>
            <div aria-label="Footer Navigation" className="text-gray-500">
              <ul className="space-y-3 sm:w-[5vw] w-full">
                <li>
                  <a className="hover:text-blue-600 hover:underline" href="#">
                    Search
                  </a>
                </li>
                <li>
                  <a className="hover:text-blue-600 hover:underline" href="#">
                    About us
                  </a>
                </li>
                <li>
                  <a className="hover:text-blue-600 hover:underline" href="#">
                    Contact us
                  </a>
                </li>
                <li>
                  <a className="hover:text-blue-600 hover:underline" href="#">
                    Returns
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="w-full flex-1 sm:ml-0 ml-4">
            <div className="mt-4 mb-2 font-medium">Help</div>
            <div aria-label="Footer Navigation" className="text-gray-500">
              <ul className="space-y-3 sm:w-[7vw] w-full">
                <li>
                  <a className="hover:text-blue-600 hover:underline" href="#">
                    Track order
                  </a>
                </li>
                <li>
                  <a className="hover:text-blue-600 hover:underline" href="#">
                    Returns
                  </a>
                </li>
                <li>
                  <a className="hover:text-blue-600 hover:underline" href="#">
                    Shipping
                  </a>
                </li>
                <li>
                  <a className="hover:text-blue-600 hover:underline" href="#">
                    FAQs
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="w-full flex-1 ">
            <div className="mt-4 mb-2 font-medium">Newsletter</div>
            <div className="flex flex-col">
              <input
                type="email"
                className="focus:outline w-full sm:w-[20vw] mb-2 block h-14 rounded-xl bg-gray-200 px-4 focus:outline-none focus:ring-1 focus:ring-blue-600"
                placeholder="Enter your email"
              />
              <button className="block rounded-xl bg-gray-500 px-6 py-3 font-medium text-white">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="bg-gray-100">
          <div className="mx-auto flex max-w-screen-xl flex-col gap-y-4 px-4 py-3 text-center text-gray-500 sm:flex-row sm:justify-between sm:text-left">
            <div className="flex items-center sm:ml-64 ml-0">
              Copyright © 2022 Shopify Theme Developed by MassTechnologist All
              rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
