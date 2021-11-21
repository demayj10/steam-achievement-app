import React, { FC } from 'react';
import { Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import { useAppSelector } from '../../app/hooks';
import { selectAppStatus, selectGameById, selectLoadedAchievements } from '../../AppSlice';
import { AchievementData, StatusType } from '../../types';
import { AchievementCard } from '../AchievementCard/AchievementCard';
import './SingleGameScreen.css';
import { cleanTextContent } from '../../lib/helpers';
import Navbar from '../Navbar/Navbar';
import LoadingScreen from '../LoadingScreen/LoadingScreen';

type GameScreenParams = {
    gameId: string | undefined,
}

export const SingleGameScreen: FC = () => {
  const appStatus: StatusType = useAppSelector(selectAppStatus);
  const { gameId }: GameScreenParams = useParams();

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
        appid: id, name, headerImage, detailedDescription,
      } = currentGame;

      const description = cleanTextContent(detailedDescription);

      content = (
        <div key={id}>
          <Navbar navTitle={name} />
          <div id="game-cover-image-container">
            <img id="game-cover-image" src={headerImage} alt="game cover" />
          </div>
          <div id="game-content">
            <Typography id="game-description" variant="body1">{description}</Typography>
            <div id="achievement-card-container">
              {achievements.map((achievement) => (
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
              ))}
            </div>

          </div>
        </div>
      );
    }
  } else {
    content = <h2>Error!</h2>;
  }

  return (
    <div id="single-game-content">
      {content}
    </div>
  );
};
