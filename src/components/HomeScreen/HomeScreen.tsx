import React, { FC, ReactElement } from 'react';
import './HomeScreen.css';
import { StatusType } from '../../types';
import { useAppSelector } from '../../app/hooks';
import { selectAppStatus } from '../../AppSlice';
import { SubmissionScreen } from '../SubmissionScreen/SubmissionScreen';
import { GamesCollection } from '../GamesCollection/GamesCollection';
import ErrorScreen from '../ErrorScreen/ErrorScreen';
import Navbar from '../Navbar/Navbar';
import LoadingScreen from '../LoadingScreen/LoadingScreen';

const HomeScreen: FC = () => {
  const appStatus: StatusType = useAppSelector(selectAppStatus);

  let content: ReactElement | HTMLElement;
  const navTitle = 'Steam Achievement App';

  if (appStatus === 'idle') {
    content = <SubmissionScreen />;
  } else if (appStatus === 'pending') {
    content = <LoadingScreen />;
  } else if (appStatus === 'fulfilled') {
    content = <GamesCollection />;
  } else {
    content = <ErrorScreen />;
  }

  return (
    <>
      <Navbar navTitle={navTitle} />
      <div id="app-content" data-testid="app-test">
        {content}
      </div>
    </>
  );
};

export default HomeScreen;
