import React, { useEffect, useState, createContext, useContext } from "react";

import { toast } from "react-hot-toast";

const Context = createContext();

export const StateContext = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [qty, setQty] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantities, setTotalQuantities] = useState(0);

  let foundProduct;
  let index;

  const onAdd = (product, quantity) => {
    const checkProductInCart = cartItems.find((item) => item._id === product._id);
    
    setTotalPrice((prevTotalPrice) => prevTotalPrice + product.Price * quantity);
    setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + quantity);
    
    if(checkProductInCart) {
      const updatedCartItems = cartItems.map((cartProduct) => {
        if(cartProduct._id === product._id) return {
          ...cartProduct,
          quantity: cartProduct.quantity + quantity
        }
      })

      setCartItems(updatedCartItems);
    } else {
      product.quantity = quantity;
      
      setCartItems([...cartItems, { ...product }]);
    }

    toast.success(`${qty} ${product.title} added to the cart.`);
  } 

  const onRemove = (product) => {
    foundProduct = cartItems.find((item) => item._id === product._id);
    const newCartItems = cartItems.filter((item) => item._id !== product._id);

    setTotalPrice((prevTotalPrice) => prevTotalPrice -foundProduct.price * foundProduct.quantity);
    setTotalQuantities(prevTotalQuantities => prevTotalQuantities - foundProduct.quantity);
    setCartItems(newCartItems);
  }

  const toggleCartItemQuanitity = (id, value) => {
    foundProduct = cartItems.find((item) => item._id === id)
    index = cartItems.findIndex((product) => product._id === id);
    const newCartItems = cartItems.filter((item) => item._id !== id)

    if(value === 'inc') {
      setCartItems([...newCartItems, { ...foundProduct, quantity: foundProduct.quantity + 1 } ]);
      setTotalPrice((prevTotalPrice) => prevTotalPrice + foundProduct.Price)
      setTotalQuantities(prevTotalQuantities => prevTotalQuantities + 1)
    } else if(value === 'dec') {
      if (foundProduct.quantity > 1) {
        setCartItems([...newCartItems, { ...foundProduct, quantity: foundProduct.quantity - 1 } ]);
        setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price)
        setTotalQuantities(prevTotalQuantities => prevTotalQuantities - 1)
      }
    }
  }
  const incQty = () => {
    setQty(qty + 1);
    console.log(qty)
  }

  const decQty = () => {
    if (qty > 1) {
      setQty(qty - 1);
    console.log(qty)
    }
  }
  return (
    <Context.Provider
      value={{
        cartItems,
        showCart,
        setShowCart,
        qty,
        totalPrice,
        setTotalPrice,
        totalQuantities,
        setTotalQuantities,
        incQty,
        decQty,
        onAdd,
        toggleCartItemQuanitity,
        onRemove,
        setCartItems,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);
