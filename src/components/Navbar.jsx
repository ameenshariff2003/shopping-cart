import React from 'react'
import { Link } from 'react-router-dom'
import { ShoppingCart } from 'phosphor-react'
import "./navbar.css";

export default function Navbar() {

  return (
    <div className='navbar'>
    <div className='links'>
    <Link to="/" className='links-1 links-ind' >Shop</Link>
    <Link to="/cart" className='links-cart links-ind'><ShoppingCart /></Link>
    <div className="cart-div">
       -
    </div>
   


    </div>
    
      
    </div>
  )
}
