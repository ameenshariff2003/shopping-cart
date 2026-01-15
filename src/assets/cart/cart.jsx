import React, { useContext } from 'react'
import { Data } from '../../prodData'
import { ShopContext } from '../../context/ShopcontextProvider'
import CartItem from './CartItem';
import { useNavigate} from "react-router-dom"
export default function Cart() {

  const {cart , getTotalAmt,} = useContext(ShopContext);
  const totalAmount = getTotalAmt()
  const navigate = useNavigate();
  return (
    <div className='cart'>
    <div>
      your cart item
    </div>
    <div className="cartItem">
      {Data.map((el)=>{
        if(cart[el.id] !==0){
          return <CartItem  data = {el}/>
        }
      })}
    </div>
    {totalAmount >0 ?(
    <div className="checkout">
      <p className='p-p'>sub total : Rs {totalAmount} {}</p><br />
      <button onClick={()=>navigate("/")} >Continue Shoping</button>
      <button>Checkout</button>
    </div>
    )
    : 
    (<h1>Your cart is empty</h1>)}
    
      
    </div>
  )
}
