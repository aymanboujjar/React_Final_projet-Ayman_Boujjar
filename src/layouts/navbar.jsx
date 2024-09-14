import React, { useState, useRef } from 'react';
import { CgProfile } from "react-icons/cg";
import { SlBag } from "react-icons/sl";
import { TbPointFilled } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { useCart } from '../context/index'; 
import { Images } from '../constant';

function Navbar() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalPosition, setModalPosition] = useState({ top: 80, right: 10 });
  const { cart } = useCart(); 
  const cartIconRef = useRef(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const showCartModal = () => {
    if (cartIconRef.current) {
      const { top, right, height } = cartIconRef.current.getBoundingClientRect();
      setModalPosition({ top: top + height + window.scrollY, right: right });
    }
    setModalOpen(true);
  };

  const closeCartModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <div className="flex items-center justify-between px-4 py-5 md:justify-around bg-white text-black ">
        <h1 className="text-4xl font-extrabold flex relative">
          Fashe
          <span className="text-red-600 absolute bottom-[-5px] text-2xl right-[-20px]">
            <TbPointFilled />
          </span>
        </h1>

        <ul className="hidden md:flex gap-x-8">
          <li onClick={() => navigate("/")} className="hover:underline hover:text-red-400 cursor-pointer">Home</li>
          <li onClick={() => navigate("/shop")} className="hover:underline hover:text-red-400 cursor-pointer">Shop</li>
          <li className="hover:underline hover:text-red-400 cursor-pointer">Sale</li>
          <li onClick={() => navigate("/blog")} className="hover:underline hover:text-red-400 cursor-pointer">Blog</li>
          <li onClick={() => navigate("/about")} className="hover:underline hover:text-red-400 cursor-pointer">About</li>
          <li onClick={() => navigate("/contact")} className="hover:underline hover:text-red-400 cursor-pointer">Contact</li>
        </ul>

        <div className="flex gap-x-6 items-center">
          <CgProfile onClick={() => navigate("/profile")} className="text-2xl cursor-pointer" />
          <div className="relative">
            <SlBag
              ref={cartIconRef}
              onClick={showCartModal}
              className="text-2xl cursor-pointer"
            />
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold rounded-full px-2 py-1">{cart.length}</span>
            )}
          </div>
          <div className="md:hidden text-3xl cursor-pointer" onClick={toggleMenu}>
            <GiHamburgerMenu />
          </div>
        </div>
      </div>

      {menuOpen && (
        <ul className="flex flex-col gap-y-4 px-4 mt-4 md:hidden bg-gray-800 text-white">
          <li onClick={() => { navigate("/"); toggleMenu(); }} className="hover:underline hover:text-red-400 cursor-pointer">Home</li>
          <li onClick={() => { navigate("/shop"); toggleMenu(); }} className="hover:underline hover:text-red-400 cursor-pointer">Shop</li>
          <li className="hover:underline hover:text-red-400 cursor-pointer">Sale</li>
          <li onClick={() => { navigate("/blog"); toggleMenu(); }} className="hover:underline hover:text-red-400 cursor-pointer">Blog</li>
          <li onClick={() => { navigate("/about"); toggleMenu(); }} className="hover:underline hover:text-red-400 cursor-pointer">About</li>
          <li onClick={() => { navigate("/contact"); toggleMenu(); }} className="hover:underline hover:text-red-400 cursor-pointer">Contact</li>
        </ul>
      )}

      {modalOpen && (
        <div className="absolute z-50" style={{ top: `${modalPosition.top}px`, right: `${modalPosition.right}px` }}>
          <div className="bg-white p-6 rounded-lg shadow-lg w-80 max-h-[80vh] overflow-y-auto">
            <button onClick={closeCartModal} className="absolute top-2 right-2 text-gray-600 hover:text-gray-900">
              &times;
            </button>
            <h2 className="text-lg font-bold mb-2">Cart Items</h2>
            {cart.length === 0 ? (
              <p className="text-gray-600">No items in the cart.</p>
            ) : (
              <ul className="space-y-4">
                {cart.map((item, index) => (
                  <li key={index} className="flex gap-x-4 items-center">
                    <img src={Images[item.image]} alt={item.title} className="w-16 h-16 object-cover rounded" />
                    <div>
                      <p className="font-semibold">{item.title}</p>
                      <p className="text-gray-600">{item.price}</p>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
