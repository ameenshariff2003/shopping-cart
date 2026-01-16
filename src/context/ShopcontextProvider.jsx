import React,{createContext, useState} from 'react'
import { Data } from '../prodData';

export const ShopContext = createContext(null);

const getDefaultCart = ()=>{
  let cart = {};
  for(let i=1;i<=Data.length;i++){
    cart[i] = 0
  }
  return cart;
}


export const ShopcontextProvider =(props) =>{
  const [cart,setCart] = useState(getDefaultCart);

  const getTotalAmt = () =>{
    let totalAmt = 0;
    for(const item in cart){
      if(cart[item]>0){
        let itemInfo = Data.find((prod)=> prod.id === Number(item));
        totalAmt += cart[item] * itemInfo.price
      }
    }
    return totalAmt;
  }
  const getCartCount = () =>{
    let totalCount = 0;
    for(const item in cart){
      if(cart[item]>0){
        let itemInfo = Data.find((prod)=> prod.id === Number(item));
        totalCount += cart[item] * itemInfo
      }
    }
    return totalCount
  }

  const addToCart = (itemId)=>{
    setCart((prev)=>({...prev , [itemId] : prev[itemId] +1}))
  }

  const removeCart = (itemId)=>{
    setCart((prev)=>({...prev , [itemId] : prev[itemId] -1}))
  };

  const contextValue = {cart,addToCart,removeCart,getTotalAmt,getCartCount}


  return (
    <ShopContext.Provider value={contextValue}>
    {props.children}
      
    </ShopContext.Provider>
  )
}
