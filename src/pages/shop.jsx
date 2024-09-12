import React from 'react';
import { Images } from '../constant';
import data from "../json/data.json";

const Shop = () => {
  // Limit the number of cards to 6
  const limitedData = data.slice(0, 6);

  return (
    <>
      <div className='relative mt-5'>
        <img src={Images.banner} alt="" />
        <h1 className='absolute bottom-16 left-[40%] text-5xl text-white font-bold'>PRODUCTS</h1>
      </div>

      <div className='flex gap-x-7 items-center justify-center mt-5'>
        <select name="first" id="first" className='py-4 border-2 border-black'>
          <option value="Featured">Featured</option>
          <option value="Date new to old ">Date new to old</option>
          <option value="Date old to new ">Date old to new</option>
          <option value="price lower to higher">price lower to higher</option>
          <option value="price higher to lower">price higher to lower</option>
          <option value="by alphabetically A-Z">by alphabetically A-Z</option>
          <option value="by alphabetically Z-A">by alphabetically Z-A</option>
        </select>
        <select name="secound" id="secound" className='w-[10vw] py-4 border-2 border-black'>
          <option value="sold">sold</option>
          <option value="on stock">on stock</option>
          <option value="new">new</option>
          <option value="All">All</option>
        </select>
      </div>

      <div className='flex gap-x-14  mt-4 '>
        <div className='flex flex-col mr-10 ml-3 gap-y-5'>
        <h1>Categories</h1>
    <ul>
        <li>Best Seller</li>
        <li>Feautured</li>
        <li>Men</li>
        <li>Women</li>
    </ul>
            <div>
            <h1>color</h1>
           <div className='flex flex-col ml-5'>
           <div className='flex gap-x-2'><input type="checkbox" name="salam  " id=""/> black</div>
            <div className="flex gap-x-2"><input type="checkbox" name="salam  " id=""/> gray</div>
            <div className="flex gap-x-2"><input type="checkbox" name="salam  " id=""/> red</div>
           </div>
            </div>
    <div>
    <h1>price</h1>
            <div className='flex flex-col ml-5'>
            <div className="flex gap-x-2"><input type="checkbox" name="salam  " id=""/> 0-20</div>
            <div className="flex gap-x-2"><input type="checkbox" name="salam  " id=""/> 20-40</div>
            </div>
    </div>
           <div>
           <h1>size</h1>
            <div className='flex flex-col ml-5'>
            <div className="flex gap-x-2"><input type="checkbox" name="salam  " id=""/> L</div>
            <div className="flex gap-x-2"><input type="checkbox" name="salam  " id=""/> M</div>
            <div className="flex gap-x-2"><input type="checkbox" name="salam  " id=""/> S</div>
            <div className="flex gap-x-2"><input type="checkbox" name="salam  " id=""/> XL</div>
            </div>
           </div>

        </div>
        <div className='ml-10 flex flex-wrap'>

        {limitedData.map((e, i) => (
          <div key={i} className="p-2 w-[30%] ">
            <img src={Images[e.image]} alt={e.title} className="w-[80%] h-auto" />
            <h1>{e.title}</h1>
            <p>{e.price}</p>
          </div>
        ))}
                </div>

      </div>
    </>
  );
};

export default Shop;
