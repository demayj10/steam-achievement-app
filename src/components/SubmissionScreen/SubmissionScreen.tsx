import React, { BaseSyntheticEvent, FC, useState } from 'react';
import {
  Button, Paper, TextField, Typography,
} from '@mui/material';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchGames } from '../../AppSlice';
import './SubmissionScreen.css';

export const SubmissionScreen: FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [steamId, setSteamId] = useState('');

  const handleSubmitSteamId = () => {
    dispatch(fetchGames(steamId));
    localStorage.setItem('steamId', steamId);
    setSteamId('');
    navigate('/games');
  };

  return (
    <Paper id="submission-container">
      <div id="submission-header">
        <Typography variant="h3">Enter your Steam Id below to get started</Typography>
      </div>
      <div id="submission-content">
        <TextField
          label="Steam ID"
          variant="outlined"
          onChange={(e: BaseSyntheticEvent) => setSteamId(e.target.value)}
        />
        <Button type="submit" variant="contained" onClick={() => handleSubmitSteamId()}>
          Submit
        </Button>
      </div>

    </Paper>
  );
};
