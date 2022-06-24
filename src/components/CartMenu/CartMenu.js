import React from 'react';
import { CartMenuItem } from '../CartMenuItem';
import './CartMenu.css';
import { Buttons } from '../UI/buttons';
export const CartMenu = ({ items, totalPrice }) => {
  return (
    <div className="cart-menu">
      <span className="cart-menu__title">Корзина: </span>
      <div className="cart-menu__list">
        {items.length>0
          ? items.map((item) => (
              <CartMenuItem game={item} key={item.title}></CartMenuItem>
            ))
          : 'Корзина пуста'}
      </div>

      {items.length > 0 ? (
        <div className="cart-menu__order">
          <div className="cart-menu__total-price">Общая цена: {totalPrice} руб</div>
          <Buttons type={'primary'} size="m" onClick={() => null}>
            Оформить заказ
          </Buttons>
        </div>
      ) : null}
    </div>
  );
};
