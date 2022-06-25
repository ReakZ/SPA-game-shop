import './CardGame.css';
import { GameBuy } from '../GameBuy';
import { GameGenrec } from '../GameGenrec';
import { useDispatch } from 'react-redux/es/exports';
import { setGame } from '../../redux/game/reducer';
import { useNavigate } from 'react-router-dom';
export const CardGame = ({ Game }) => {
  const dispatch = useDispatch();
  const navigate= useNavigate();
  const handleClick = () => {
    dispatch(setGame(Game));
    navigate(`/game/${Game.title}`)
  };
  return (
    <div className="CardGame" onClick={handleClick}>
      <div
        className="CardGame__img"
        style={{ backgroundImage: `url(${Game.img})` }}
      ></div>
      <span className="CardGame__title">{Game.title}</span>
      <GameGenrec Game={Game}></GameGenrec>
      <GameBuy Game={Game}></GameBuy>
    </div>
  );
};
