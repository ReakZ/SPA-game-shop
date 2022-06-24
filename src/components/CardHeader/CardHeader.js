import './cartHeader.css';
import { BiCartAlt } from 'react-icons/bi';
import { CartMenu } from '../CartMenu/CartMenu';
import {sumTotalPrice} from '../../utils'
import { useSelector } from 'react-redux';
import { useState } from 'react';
export const CardHeader = () => {

  const items=useSelector(state=>state.cart.gameInCart)
  const totalPrice=sumTotalPrice(items)

  const [visibleCartMenu,setVisibleCartMenu]=useState(false)
  return (
    <div className='card-block'>
      {items.length?<div className='cart-block__quantity'>{items.length}</div>:null}
      <span className="cart-block__total-price">{totalPrice>0 && `${totalPrice} руб.`}</span>
      <BiCartAlt size={25} className="cart-block__icon" onClick={()=>setVisibleCartMenu(!visibleCartMenu)}></BiCartAlt>

      {visibleCartMenu &&<CartMenu items={items} totalPrice={totalPrice}></CartMenu>}
    </div>
  );
}


