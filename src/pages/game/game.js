import React from 'react';
import './game.css';
import { useSelector } from 'react-redux';
import { GameBuy } from '../../components/GameBuy';
import { GameGenrec } from '../../components/GameGenrec';

export const GamePage = () => {
  const currentGame = useSelector((state) => state.game.currentGame);

  if (!currentGame) {
    return (
      <div className="game-page wrapper">
        <h1>Такой страницы не существует</h1>
      </div>
    );
  }
  return (
    <div className="game-page wrapper">
      <div className="game-page__video">
        <iframe
          width="100%"
          height="315"
          src="https://www.youtube.com/embed/dL-VxP_wbbk"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <div className="game-page__text">
        <div
          className="game-page__cover"
          style={{ backgroundImage: `url(../${currentGame.img})` }}
        ></div>
        <h2 className="game-page__title">{currentGame.title}</h2>
        <p className="game-page__desc">{currentGame.decription}</p>
        <GameGenrec Game={currentGame} onClick={() => null}></GameGenrec>
        <GameBuy Game={currentGame}></GameBuy>
      </div>
    </div>
  );
};
