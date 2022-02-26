import React, { FC, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  FormControlLabel, Grid, Switch,
} from '@mui/material';
import { useAppSelector } from '../../app/hooks';
import { selectAppStatus, selectGameById, selectLoadedAchievements } from '../../AppSlice';
import { AchievementData, StatusType } from '../../types';
import { AchievementCard } from '../AchievementCard/AchievementCard';
import './SingleGameScreen.css';
import Navbar from '../Navbar/Navbar';
import LoadingScreen from '../LoadingScreen/LoadingScreen';

interface GameScreenParams {
    gameId?: string,
}

export const SingleGameScreen: FC = () => {
  const appStatus: StatusType = useAppSelector(selectAppStatus);
  const { gameId }: GameScreenParams = useParams();
  const [hideUnlockedAchievements, setHideUnlockedAchievements] = useState<boolean>(false);

  if (gameId === undefined) {
    return <h2>Where did your game id go?</h2>;
  }

  const currentGame = useAppSelector((state) => selectGameById(state, gameId));
  const achievements: AchievementData[] = useAppSelector(selectLoadedAchievements);

  let content;
  if (appStatus === 'pending') {
    content = <LoadingScreen />;
  } else if (appStatus === 'fulfilled') {
    if (currentGame === undefined) {
      content = <h2>{'Huh, that\'s weird, you\'re not supposed to be here!'}</h2>;
    } else {
      const {
        appid: id, name, headerImage,
      } = currentGame;

      content = (
        <div key={id}>
          <Navbar navTitle={name} />
          <div id="game-cover-image-container">
            <img id="game-cover-image" src={headerImage} alt="game cover" />
          </div>
          <div>
            <Grid
              container
              direction="row"
              justifyContent="flex-end"
              alignItems="center"
            >
              <FormControlLabel
                control={<Switch />}
                label="Hide Unlocked Achievements"
                value={hideUnlockedAchievements}
                onChange={() => setHideUnlockedAchievements(!hideUnlockedAchievements)}
              />
            </Grid>
          </div>
          <div id="game-content">
            <div id="achievement-card-container">
              {achievements.map((achievement) => {
                if (!hideUnlockedAchievements || !achievement.achieved) {
                  return (
                    <AchievementCard
                      key={achievement.apiName}
                      apiName={achievement.apiName}
                      displayName={achievement.displayName}
                      description={achievement.description}
                      icon={achievement.icon}
                      iconGray={achievement.iconGray}
                      achieved={achievement.achieved}
                      unlockTime={achievement.unlockTime}
                    />
                  );
                }
                return null;
              })}
            </div>

          </div>
        </div>
      );
    }
  } else {
    content = (
      <div>
        <Navbar navTitle="" />
        <h2>Error!</h2>
      </div>
    );
  }

  return (
    <div id="single-game-content">
      {content}
    </div>
  );
};
