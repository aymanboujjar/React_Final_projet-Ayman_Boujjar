import React, { useState } from 'react';
import { Images } from '../constant';
import data from "../json/data.json";
import { useNavigate } from 'react-router-dom';

const Shop2 = () => {
    const navigate = useNavigate();
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

    const limitedData = filteredData.slice(6, 12);

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
                <div className='absolute inset-0 bg-black opacity-50'></div>
                <p className='text-[50px] text-white font-bold text-center relative'>
                    Products
                </p>
            </div>

            <div className='flex flex-col md:flex-row gap-7 items-center justify-center mt-5 px-4'>
                <select
                    name="first"
                    id="first"
                    className='py-4 border-2 border-black w-full md:w-auto'
                    value={selectedDropdownType}
                    onChange={handleDropdownChange}
                >
                    <option value="All">All</option>
                    <option value="new">New</option>
                    <option value="sold">Sold</option>
                    <option value="on stock">On Stock</option>
                </select>

                <select
                    name="second"
                    id="second"
                    className='py-4 border-2 border-black w-full md:w-auto'
                    value={sortOption}
                    onChange={handleSortChange}
                >
                    <option value="Featured">Featured</option>
                    <option value="Date new to old">Date new to old</option>
                    <option value="Date old to new">Date old to new</option>
                    <option value="price lower to higher">Price lower to higher</option>
                    <option value="price higher to lower">Price higher to lower</option>
                    <option value="by alphabetically A-Z">By alphabetically A-Z</option>
                    <option value="by alphabetically Z-A">By alphabetically Z-A</option>
                </select>
            </div>

            <div className='flex flex-col md:flex-row gap-8 mt-4 px-4'>
                <div className='flex flex-col md:w-1/4 gap-y-5'>
                    <h1 className='text-3xl'>Categories</h1>
                    <ul className='list-disc pl-5'>
                        <li>Best Seller</li>
                        <li>Featured</li>
                        <li>Men</li>
                        <li>Women</li>
                    </ul>

                    <div>
                        <h1 className='text-3xl'>Color</h1>
                        <div className='flex flex-col ml-5'>
                            <div className='flex gap-x-2'><input type="checkbox" value="black" onChange={handleCheckboxChange} /> black</div>
                            <div className='flex gap-x-2'><input type="checkbox" value="gray" onChange={handleCheckboxChange} /> gray</div>
                            <div className='flex gap-x-2'><input type="checkbox" value="red" onChange={handleCheckboxChange} /> red</div>
                        </div>
                    </div>

                    <div>
                        <h1 className='text-3xl'>Type</h1>
                        <div className='flex flex-col ml-5'>
                            <div className='flex gap-x-2'><input type="checkbox" value="new" onChange={handleCheckboxChange} /> New</div>
                            <div className='flex gap-x-2'><input type="checkbox" value="sold" onChange={handleCheckboxChange} /> Sold</div>
                            <div className='flex gap-x-2'><input type="checkbox" value="on stock" onChange={handleCheckboxChange} /> On Stock</div>
                        </div>
                    </div>

                    <div>
                        <h1 className='text-3xl'>Size</h1>
                        <div className='flex flex-col ml-5'>
                            <div className='flex gap-x-2'><input type="checkbox" value="L" onChange={handleCheckboxChange} /> L</div>
                            <div className='flex gap-x-2'><input type="checkbox" value="M" onChange={handleCheckboxChange} /> M</div>
                            <div className='flex gap-x-2'><input type="checkbox" value="S" onChange={handleCheckboxChange} /> S</div>
                            <div className='flex gap-x-2'><input type="checkbox" value="XL" onChange={handleCheckboxChange} /> XL</div>
                        </div>
                    </div>
                </div>

                <div className='flex flex-wrap gap-4 w-full md:w-3/4'>
                    {limitedData.map((e, i) => (
                        <div key={i} className='p-2 w-full sm:w-1/2 md:w-1/3 lg:w-1/4'>
                            <img src={Images[e.image]} alt={e.title} className='w-full h-auto' />
                            <h1 className='cursor-pointer' onClick={() => { navigate(`/details/${e.id}`) }}>{e.title}</h1>
                            <p>{e.price}</p>
                            <p>{e.type}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className='flex items-center justify-center gap-x-9 mt-5'>
                <button className='bg-white text-black hover:bg-black hover:text-white rounded-full w-10 p-2 px-4' onClick={() => navigate("/shop")}>1</button>
                <button className='bg-black text-white rounded-full w-10 p-2 px-4' onClick={() => navigate("/shop2")}>2</button>
            </div>
        </>
    );
};

export default Shop2;
