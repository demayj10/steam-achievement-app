import React, { FC } from 'react';
import {
  Card, CardContent, CardMedia, Typography,
} from '@mui/material';
import './AchievementCard.css';

interface AchievementCardProps {
    apiName: string,
    displayName: string,
    description: string,
    icon: string,
    iconGray: string,
    achieved: boolean,
    unlockTime: number,
}

export const AchievementCard: FC<AchievementCardProps> = (
  props,
) => {
  const {
    displayName, description, icon, iconGray, achieved,
  } = props;

  return (
    <Card elevation={10} className="card-body">
      <CardMedia className="card-image" component="img" height="125" image={achieved ? icon : iconGray} alt="achievement icon" />
      <CardContent className="card-content">
        <Typography variant="h6">{displayName}</Typography>
        <Typography variant="body1">{description}</Typography>
      </CardContent>
    </Card>
  );
};
