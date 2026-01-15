import React from 'react'
import { Data } from '../../prodData'
import Prodcard from './Prodcard'
import "./shop.css"

export default function Shop() {
  return (
    <div className='shop'>
    <div className='shop-title'>
        <h1>I Show</h1>
    </div>
    <div className="products">
    {Data.map((el)=>{ 
        return <Prodcard data={el}/>
    })}

    </div>
    {/* <Prodcard/> */}
      
    </div>
  )
}
