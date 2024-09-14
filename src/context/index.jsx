import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [dataUser, setDataUser] = useState([]); 

  const addToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
  };
console.log(cart);
  return (
    <CartContext.Provider value={{ cart, addToCart ,dataUser, setDataUser}}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);



