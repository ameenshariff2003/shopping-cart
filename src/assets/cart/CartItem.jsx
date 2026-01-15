import React,{useContext} from 'react'
import { ShopContext } from '../../context/ShopcontextProvider';


import   './cart.css';



 function CartItem(props) {
    const {id,prodName,price,prodImg} = props.data;
    const {cart,addToCart,removeCart} = useContext(ShopContext);


  return (
    
    <div className='cartItermc'>
    
    <img className='img' src={prodImg} alt={prodName} />
    <div className="description">
        <p>
            <b>{prodName}</b>
        </p>
        <p>Rs {price}</p>
        <div className='countHandel'>
          <button onClick={()=>removeCart(id)} className='itm-'>-</button>

          <input className='itm-cnt' value={cart[id]}/>
          <button onClick={()=>addToCart(id)} className='itm-'>+</button>
        </div>
    </div>
      
    </div>
  )
}

export default CartItem
