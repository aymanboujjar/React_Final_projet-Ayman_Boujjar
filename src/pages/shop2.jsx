import React, { useState } from 'react';
import { Images } from '../constant';
import data from "../json/data.json";
import { useNavigate } from 'react-router-dom';

const Shop2 = () => {
    const navigate=useNavigate()
    const [selectedDropdownType, setSelectedDropdownType] = useState("All");
    const [selectedCheckboxTypes, setSelectedCheckboxTypes] = useState([]);
    const [sortOption, setSortOption] = useState("Featured");
    const handleDropdownChange = (e) => {
        setSelectedDropdownType(e.target.value);
    };

    const handleCheckboxChange = (e) => {
        const { value, checked } = e.target;
        if (checked) {
            setSelectedCheckboxTypes([...selectedCheckboxTypes, value]);
        } else {
            setSelectedCheckboxTypes(selectedCheckboxTypes.filter((type) => type !== value));
        }
    };

    let filteredData = data;

    if (selectedDropdownType !== "All") {
        filteredData = filteredData.filter(product => product.type === selectedDropdownType);
    }

    if (selectedCheckboxTypes.length > 0) {
        filteredData = filteredData.filter(product => selectedCheckboxTypes.includes(product.type));
    }

    const limitedData = filteredData.slice(6, 8);
    const handleSortChange = (e) => {
        setSortOption(e.target.value);
    };
   
     if (sortOption === "by alphabetically A-Z") {
        filteredData = filteredData.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortOption === "by alphabetically Z-A") {
        filteredData = filteredData.sort((a, b) => b.title.localeCompare(a.title));
    }
    return (
        <>
              <div
                className='flex justify-center items-center relative'
                style={{
                    backgroundImage: `url(${Images.banner})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    height: '30vh',
                    backgroundRepeat: 'no-repeat',
                }}
            >
                <div className='absolute inset-0 bg-black opacity-50' ></div>

                <p className='text-[50px] text-white font-bold text-center relative'>
                    Products
                </p>
            </div>

            <div className='flex gap-x-7 items-center justify-center mt-5'>
                <select
                    name="first"
                    id="first"
                    className='py-4 border-2 border-black'
                    value={selectedDropdownType}
                    onChange={handleDropdownChange}
                >
                    <option value="All">All</option>
                    <option value="new">New</option>
                    <option value="sold">Sold</option>
                    <option value="on stock">On Stock</option>
                </select>

              
        <select name="secound" id="secound" className='py-4 border-2 border-black' value={sortOption} onChange={handleSortChange}>
          <option value="Featured">Featured</option>
          <option value="Date new to old ">Date new to old</option>
          <option value="Date old to new ">Date old to new</option>
          <option value="price lower to higher">price lower to higher</option>
          <option value="price higher to lower">price higher to lower</option>
          <option value="by alphabetically A-Z">by alphabetically A-Z</option>
          <option value="by alphabetically Z-A">by alphabetically Z-A</option>
        </select>
            </div>

            <div className='flex gap-x-14  mt-4 '>

                <div className='flex flex-col mr-10 ml-3 gap-y-5'>
                    <h1 className='text-3xl'>Categories</h1>
                    <ul>
                        <li>Best Seller</li>
                        <li>Featured</li>
                        <li>Men</li>
                        <li>Women</li>
                    </ul>

                    <div>
                        <h1 className='text-3xl'>color</h1>
                        <div className='flex flex-col ml-5'>
                            <div className='flex gap-x-2'><input type="checkbox" name="salam" id="" /> black</div>
                            <div className="flex gap-x-2"><input type="checkbox" name="salam" id="" /> gray</div>
                            <div className="flex gap-x-2"><input type="checkbox" name="salam" id="" /> red</div>
                        </div>
                    </div>

                    <div>
                        <h1 className='text-3xl'>Type</h1>
                        <div className='flex flex-col ml-5'>
                            <div className="flex gap-x-2">
                                <input
                                    type="checkbox"
                                    value="new"
                                    onChange={handleCheckboxChange}
                                /> New
                            </div>
                            <div className="flex gap-x-2">
                                <input
                                    type="checkbox"
                                    value="sold"
                                    onChange={handleCheckboxChange}
                                /> Sold
                            </div>
                            <div className="flex gap-x-2">
                                <input
                                    type="checkbox"
                                    value="on stock"
                                    onChange={handleCheckboxChange}
                                /> On Stock
                            </div>
                        </div>
                    </div>

                    <div>
                        <h1 className='text-3xl'>size</h1>
                        <div className='flex flex-col ml-5'>
                            <div className="flex gap-x-2"><input type="checkbox" name="size" id="" /> L</div>
                            <div className="flex gap-x-2"><input type="checkbox" name="size" id="" /> M</div>
                            <div className="flex gap-x-2"><input type="checkbox" name="size" id="" /> S</div>
                            <div className="flex gap-x-2"><input type="checkbox" name="size" id="" /> XL</div>
                        </div>
                    </div>
                </div>

                <div className='ml-10 flex flex-wrap'>
                    {limitedData.map((e, i) => (
                        <div key={i} className="p-2 w-[30%]">
                            <img src={Images[e.image]} alt={e.title} className="w-[80%] h-auto" />
                            <h1 className=' cursor-pointer'  onClick={() => { navigate(`/details/${e.id}`) }}>{e.title}</h1>
                            <p>{e.price}</p>
                            <p>{e.type}</p>
                        </div>
                    ))}
                </div>
            
            </div>
                    <div className='flex items-center justify-center gap-x-9'>
                    <button className=' bg-white text-black hover:bg-black hover:text-white rounded-full w-10 p-2 px-4' onClick={()=>navigate("/shop")}>1</button>
                    <button className='bg-black text-white rounded-full w-10 p-2 px-4' onClick={()=>navigate("/shop2")}>2</button>
                    </div>
        </>
    );
};

export default Shop2;
