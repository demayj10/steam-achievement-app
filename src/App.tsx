import React, { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Outlet, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import { StatusType } from './types';
import { useAppSelector } from './app/hooks';
import { fetchGamesFromStorage, selectAppStatus } from './AppSlice';

import ErrorScreen from './components/ErrorScreen/ErrorScreen';
import LoadingScreen from './components/LoadingScreen/LoadingScreen';

import './App.css';

const App: FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const appStatus: StatusType = useAppSelector(selectAppStatus);
  const navTitle = 'Acheivement Hunter';

  useEffect(() => {
    if (localStorage.getItem('steamId') === null || localStorage.getItem('games') === null) {
      navigate('/steamId');
    } else {
      dispatch(fetchGamesFromStorage({}));
      navigate('/games');
    }
  }, []);

  let content = <ErrorScreen />;
  if (appStatus === 'pending') {
    content = <LoadingScreen />;
  } else {
    content = <Outlet />;
  }

  return (
    <div className="App">
      <Navbar navTitle={navTitle} />
      <div id="app-content" data-testid="app-test">
        {content}
      </div>
    </div>
  );
};

export default App;
