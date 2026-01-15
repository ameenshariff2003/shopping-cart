import React, { useContext } from 'react'
import  './card.css';
import { ShopContext } from '../../context/ShopcontextProvider';
export default function Prodcard(props) {
    const {id,prodName,price,prodImg} = props.data;
    const {addToCart,cart} = useContext(ShopContext);

    const cartItemPrice = cart[id];
  return (
    
    <div className='prodcard' key={id}>
    <img className='img' src={prodImg} alt="" />
    <div className="descroption">
        <p><b>{prodName}</b></p>
        <p>₹{price}</p>
        <button className='btn' onClick={()=>addToCart(id)}>add to cart {cartItemPrice>0 && <> "{cartItemPrice}'</>}</button>
        
    </div>
    
    


      
    </div>
    
  )
}
