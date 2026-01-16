import React, { createContext, useState } from 'react';
import { Data } from '../prodData';

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  Data.forEach((item) => {
    cart[item.id] = 0;
  });
  return cart;
};

export const ShopContextProvider = ({ children }) => {
  const [cart, setCart] = useState(getDefaultCart());

  // ✅ Total price
  const getTotalAmt = () => {
    let totalAmt = 0;

    for (const itemId in cart) {
      if (cart[itemId] > 0) {
        const itemInfo = Data.find(
          (prod) => prod.id === Number(itemId)
        );

        if (itemInfo) {
          totalAmt += cart[itemId] * itemInfo.price;
        }
      }
    }
    return totalAmt;
  };

  // ✅ Total quantity count
  const getCartCount = () => {
    let totalCount = 0;

    for (const itemId in cart) {
      totalCount += cart[itemId];
    }

    return totalCount;
  };

  // ✅ Add item
  const addToCart = (itemId) => {
    setCart((prev) => ({
      ...prev,
      [itemId]: prev[itemId] + 1,
    }));
  };

  // ✅ Remove item (no negative values)
  const removeFromCart = (itemId) => {
    setCart((prev) => ({
      ...prev,
      [itemId]: Math.max(prev[itemId] - 1, 0),
    }));
  };

  const contextValue = {
    cart,
    addToCart,
    removeFromCart,
    getTotalAmt,
    getCartCount,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {children}
    </ShopContext.Provider>
  );
};
