import './GameGenrec.css';

export const GameGenrec = ({ Game, onClick }) => {
  return (
    <div className="Gens">
      {Game.genrec.map((x, i) => (
        <span key={i} className={'Gens__item'} onClick={onClick}>{x} </span>
      ))}
    </div>
  );
};
