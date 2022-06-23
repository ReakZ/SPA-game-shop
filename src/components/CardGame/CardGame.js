import './CardGame.css';
import {GameBuy} from '../GameBuy'
import {GameGenrec} from '../GameGenrec'
export const CardGame = ({Game}) => {
  return (
    <div className="CardGame">

<div className="CardGame__img" style={{backgroundImage:`url(${Game.img})`}}></div>
<span className="CardGame__title">{Game.title}</span>
<GameGenrec Game={Game} onClick={()=>null}></GameGenrec>
<GameBuy Game={Game} onClick={(e)=>console.log(Game.title)}></GameBuy>
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