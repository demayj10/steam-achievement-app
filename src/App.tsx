import React, { FC } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import HomeScreen from './components/HomeScreen/HomeScreen';
import { SingleGameScreen } from './components/SingleGameScreen/SingleGameScreen';
import Footer from './components/Footer/Footer';

const CoreApp: FC = () => (
  <div className="App">
    <Routes>
      <Route path="/" element={<HomeScreen />} />
      <Route path="game/:gameId" element={<SingleGameScreen />} />
    </Routes>
    <Footer />
  </div>
);

const App: FC = () => (
  <BrowserRouter basename="steam-achievement-app">
    <CoreApp />
  </BrowserRouter>
);

export default App;
