import React, { FC, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  FormControlLabel, Grid, LinearProgress, Switch, Box, Typography,
} from '@mui/material';
import { useAppSelector } from '../../app/hooks';
import { selectAppStatus, selectGameById, selectLoadedAchievements } from '../../AppSlice';
import { AchievementData, StatusType } from '../../types';
import { AchievementCard } from '../AchievementCard/AchievementCard';
import './SingleGameScreen.css';
import Navbar from '../Navbar/Navbar';
import LoadingScreen from '../LoadingScreen/LoadingScreen';
import ErrorScreen from '../ErrorScreen/ErrorScreen';

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
  const countOfUnlockedAchievements: number = achievements.filter(
    (achievement: AchievementData) => achievement.achieved,
  ).length;
  const percentComplete: number = Math.round(
    (countOfUnlockedAchievements / achievements.length) * 100,
  );

  let content;
  if (appStatus === 'pending') {
    content = <LoadingScreen />;
  } else if (appStatus === 'fulfilled') {
    if (currentGame === undefined) {
      content = <h2>{'Huh, that\'s weird, you\'re not supposed to be here!'}</h2>;
    } else {
      const {
        appid: id, headerImage,
      } = currentGame;

      content = (
        <div key={id}>
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
              <Box sx={{
                display: 'flex',
                alignItems: 'center',
                width: '50%',
                mr: 2,
              }}
              >
                <Box sx={{ minWidth: 40 }}>
                  <Typography variant="body1">
                    {`${countOfUnlockedAchievements}/${achievements.length}`}
                  </Typography>
                </Box>
                <Box sx={{ width: '100%', mr: 1, ml: 3 }}>
                  <LinearProgress
                    variant="determinate"
                    value={percentComplete}
                    color="primary"
                  />
                </Box>
                <Box sx={{ minWidth: 40, mr: 2 }}>
                  <Typography variant="body1">
                    {`${percentComplete}%`}
                  </Typography>
                </Box>
              </Box>

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
    const message = 'It looks like this game might not have achievements associated with it on Steam. Please reach out to the team if this is incorrect.';
    content = <ErrorScreen errorMessage={message} />;
  }

  return (
    <div id="single-game-content">
      {content}
    </div>
  );
};
