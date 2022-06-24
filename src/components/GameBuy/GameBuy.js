import './GameBuy.css';
import { Buttons } from '../UI/buttons';
import { deleteItemFromCart, setItemInCart } from '../../redux/cart/reducer';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux/es/exports';
export const GameBuy = ({ Game }) => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.gameInCart);
  const itemInCart = items.some((item) => item.id === Game.id);
  const handleClick = (e) => {
    e.stopPropagation();
    if (itemInCart) {
      dispatch(deleteItemFromCart(Game.id));
    } else {
      dispatch(setItemInCart(Game));
    }
  };
  return (
    <div className="BuyBlock">
      <div className="BuyBlock__price">{Game.price} Руб</div>
      <Buttons
        type={!itemInCart ? 'primary' : 'secondary'}
        size="m"
        onClick={handleClick}
      >
        {!itemInCart ? 'Добавить в корзину' : 'Убрать из корзины'}
      </Buttons>
    </div>
  );
};
