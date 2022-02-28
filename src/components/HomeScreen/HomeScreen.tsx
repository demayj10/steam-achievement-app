import React, { FC, ReactElement } from 'react';
import './HomeScreen.css';
import { useNavigate } from 'react-router-dom';
import { StatusType } from '../../types';
import { useAppSelector } from '../../app/hooks';
import { selectAppStatus } from '../../AppSlice';
import { SubmissionScreen } from '../SubmissionScreen/SubmissionScreen';
import ErrorScreen from '../ErrorScreen/ErrorScreen';
import Navbar from '../Navbar/Navbar';
import LoadingScreen from '../LoadingScreen/LoadingScreen';

const HomeScreen: FC = () => {
  const navigate = useNavigate();
  const appStatus: StatusType = useAppSelector(selectAppStatus);

  let content: ReactElement | HTMLElement = <LoadingScreen />;
  const navTitle = 'Steam Achievement App';

  if (appStatus === 'idle') {
    content = <SubmissionScreen />;
  } else if (appStatus === 'rejected') {
    content = <ErrorScreen />;
  } else if (appStatus === 'fulfilled') {
    navigate('games');
  } else {
    content = <LoadingScreen />;
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
