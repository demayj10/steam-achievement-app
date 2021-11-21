import React, { FC } from 'react';
import { CircularProgress } from '@mui/material';
import './LoadingScreen.css';

const LoadingScreen: FC = () => (
  <div>
    <CircularProgress
      thickness={3}
      size={100}
    />
  </div>
);

export default LoadingScreen;
