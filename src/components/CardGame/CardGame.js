import './CardGame.css';
import { GameBuy } from '../GameBuy';
import { GameGenrec } from '../GameGenrec';
export const CardGame = ({ Game }) => {
  return (
    <div className="CardGame">
      <div
        className="CardGame__img"
        style={{ backgroundImage: `url(${Game.img})` }}
      ></div>
      <span className="CardGame__title">{Game.title}</span>
      <GameGenrec Game={Game} onClick={() => null}></GameGenrec>
      <GameBuy Game={Game}></GameBuy>
    </div>
  );
};
