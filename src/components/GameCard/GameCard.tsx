import React, { FC } from 'react';
import './GameCard.css';
import {
  Card, CardActionArea, CardContent, CardMedia, Typography,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import {
  fetchAchievements, selectSteamId,
} from '../../AppSlice';

interface GameCardProps {
    id: string,
    name: string,
    headerImage: string,
}

export const GameCard: FC<GameCardProps> = (props) => {
  const { id, name, headerImage } = props;
  const steamId = useAppSelector(selectSteamId);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleGameSelect = () => {
    navigate(`game/${id}`);
    dispatch(fetchAchievements({ steamId, gameId: id }));
  };

  return (
    <Card className="game-card" elevation={10}>
      <CardActionArea onClick={() => handleGameSelect()}>
        <CardMedia
          component="img"
          image={headerImage}
          alt="game cover"
        />
        <CardContent>
          <Typography variant="h5">{name}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
