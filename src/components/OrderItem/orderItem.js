import React from 'react';
import './orderItem.css';
import { useDispatch } from 'react-redux/es/exports';
import { deleteItemFromCart } from '../../redux/cart/reducer';

import { AiOutlineCloseCircle } from 'react-icons/ai';
export const OrderItem = ({ game }) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(deleteItemFromCart(game.id));
  };
  return (
    <div className="order-item">
      <div
        className="order-item__cover"
        style={{ backgroundImage: `url(${game.img})` }}
      ></div>
      <div className="order-item__title">{game.title}</div>
      <div className="order-item__price">{game.price} руб.</div>

      <AiOutlineCloseCircle size={25} onClick={handleClick} className='order-item__icon-delete'></AiOutlineCloseCircle>
    </div>
  );
};
