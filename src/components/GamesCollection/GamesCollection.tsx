import React, { FC } from 'react';
import './GamesCollection.css';

import { useAppSelector } from '../../app/hooks';
import { selectAllGames } from '../../AppSlice';
import { GameCard } from '../GameCard/GameCard';

export const GamesCollection: FC = () => {
  const games = useAppSelector(selectAllGames);

  return (
    <div id="games-collection-container">
      <div id="card-container">
        {games.map((game) => (
          <GameCard
            key={game.appid}
            id={game.appid}
            name={game.name}
            headerImage={game.headerImage}
          />
        ))}
      </div>
    </div>
  );
};
