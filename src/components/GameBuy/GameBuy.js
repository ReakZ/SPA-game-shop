import './GameBuy.css';
import {Buttons} from '../UI/buttons'
export const GameBuy = ({Game,onClick}) => {
  return (
    <div className="BuyBlock">
<div className="BuyBlock__price">{Game.price} Руб</div>
<Buttons type={'primary'} size='m' onClick={onClick}>Add to Cart</Buttons>

    </div>


  );
};


// .CardGame{
//   display: flex;
// border-radius: 15px;
// background-color: rgb(23, 25, 80);
// }


// .CardGame__img{
//   height: 120px;
//   width: 100%;
//   border-top-left-radius: 15px;
//   border-top-right-radius: 15px;
//   margin-bottom: 20px;
// }

// .CardGame__title{
//   margin-bottom: 20px;
// }
// .CardGame__gen{