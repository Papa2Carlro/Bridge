import React, { FC, useEffect, useState } from 'react';
import { GameProps } from '../utils/interface';
import { shuffleCards } from '../utils/helper';

import card from '../utils/card';

const Game: FC<GameProps> = ({}): React.ReactElement => {
  // @ts-ignore
  const [deckCards, setDeckCards] = useState(shuffleCards(card));
  // @ts-ignore
  const [enemy, setEnemy]: Array<any> | Function = useState([]);
  // @ts-ignore
  const [player, setPlayer]: Array<any> | Function = useState([]);
  // @ts-ignore
  const [game, setGame]: Array<any> | Function = useState([]);

  const getCard = (): Object => {
    const card: Object = deckCards[deckCards.length - 1];
    setDeckCards(deckCards.pop());
    return card;
  };

  useEffect(() => {
    for (let i = 1; i <= 12; i++) {
      if (i === 12) {
        setGame(game.push(getCard()));
        break;
      }

      if (i % 2 === 0) setPlayer(player.push(getCard()));
      else setEnemy(enemy.push(getCard()));
    }

    console.log(player);
    console.log(enemy);
    console.log(game);
  }, []);

  return <div></div>;
};

export default Game;
