import React from 'react'
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Shop from './assets/shop/shop'
import Cart from './assets/cart/cart'
import { ShopcontextProvider } from './context/ShopcontextProvider'
export default function Routers() {
  return (
    <ShopcontextProvider>
    <Router>
    <Navbar/>
        <Routes>
            <Route path='/' element={<Shop/>} />
            <Route path='/cart' element={<Cart/>}/>
        </Routes>
    </Router>
      
    </ShopcontextProvider>
  )
}
