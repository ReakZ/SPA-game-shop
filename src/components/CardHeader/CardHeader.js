import './cartHeader.css';
import { BiCartAlt } from 'react-icons/bi';

export const CardHeader = () => {
  return (
    <div className='card-block'>
      <span className="cart-block__total-price">2300 rub</span>
      <BiCartAlt size={25} className="cart-block__icon"></BiCartAlt>
    </div>
  );
}


