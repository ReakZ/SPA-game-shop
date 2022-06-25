import React from 'react';
import { useSelector } from 'react-redux';
import { sumTotalPrice } from '../../utils';
import { Buttons } from '../../components/UI/buttons';
import './order.css';
import { OrderItem } from '../../components/OrderItem';
export const OrderPage = () => {
  const items = useSelector((state) => state.cart.gameInCart);
  const totalPrice = sumTotalPrice(items);

  if (items < 1) {
    return (
      <div className="order wrapper">
        <h1>Ваша корзина пуста</h1>
      </div>
    );
  }
  return (
    <div className="order wrapper">
      <div className="order__content">
        {items.map((item) => (
<OrderItem game={item}></OrderItem>
        ))}
      </div>
      <div className="order__total">
        <div className="order__price">Итого: {totalPrice} руб.</div>
        <Buttons type={'primary'}>Заказать</Buttons>
      </div>
    </div>
  );
};
