import React, { FC } from 'react';
import './App.css';
import { getGameAchievements, submitSteamId } from './lib/steamDataCollectors';

const STEAM_ID = '76561198052061156';

const App: FC = () => (
  <div className="App">
    <h1>Hello, World</h1>
    <button type="button" aria-label="submit id" onClick={() => submitSteamId(STEAM_ID)}>
      Hi!
    </button>
    <button
      type="button"
      aria-label="get achievements"
      onClick={() => getGameAchievements(STEAM_ID, '8930')}
    >
      Civ 5
    </button>
  </div>
);

export default App;
