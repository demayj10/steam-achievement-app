import React from 'react';
import { render } from 'react-dom';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './index.css';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@mui/material';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './app/store';
import { theme } from './theme';
import { SingleGameScreen } from './components/SingleGameScreen/SingleGameScreen';
import { GamesCollection } from './components/GamesCollection/GamesCollection';
import { SubmissionScreen } from './components/SubmissionScreen/SubmissionScreen';

const rootElement = document.getElementById('root');
render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <BrowserRouter basename="steam-achievement-app">
          <Routes>
            <Route path="/" element={<App />}>
              <Route path="/steamId" element={<SubmissionScreen />} />
              <Route path="/games" element={<GamesCollection />} />
              <Route path="/games/:gameId" element={<SingleGameScreen />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  rootElement,
);

reportWebVitals();
