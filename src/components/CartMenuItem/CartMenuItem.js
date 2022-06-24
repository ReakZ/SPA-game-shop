import React from 'react';
import './CartMenuItem.css';
export const CartMenuItem = ({ game }) => {
  return (
    <div className="cart-menu-item">
      <span>{game.title}</span>
      <span>{game.price} руб.</span>

    </div>
  );
};
