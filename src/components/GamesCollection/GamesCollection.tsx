import React, {
  FC, useState,
} from 'react';
import './GamesCollection.css';
import {
  Box,
  FormControl,
  Grid, InputLabel, MenuItem, Select, SelectChangeEvent,
} from '@mui/material';
import { useAppSelector } from '../../app/hooks';
import { selectAllGames } from '../../AppSlice';
import { GameCard } from '../GameCard/GameCard';
import { GameData } from '../../types';

const enum SortType {
  GameTitle = 'Game Title',
}

const compareGameNames = (a: GameData, b: GameData) => {
  if (a.name < b.name) return -1;
  if (a.name > b.name) return 1;
  return 0;
};

const sortGamesList = (sortBy: string, games: GameData[]): GameData[] => {
  switch (sortBy) {
    case SortType.GameTitle:
      games.sort(compareGameNames);
      break;
    default:
      break;
  }

  return games;
};

export const GamesCollection: FC = () => {
  const games = useAppSelector(selectAllGames);
  const [sortBy, setSortBy] = useState<string>('');

  const handleChange = (event: SelectChangeEvent) => {
    setSortBy(event.target.value);
  };

  const sortedGames: GameData[] = sortGamesList(sortBy, [...games]);

  return (
    <div id="games-collection-container">
      <Grid
        container
        direction="row"
        justifyContent="flex-end"
        alignItems="center"
        marginTop="1em"
      >
        <Box sx={{ width: 100, mr: 3 }}>
          <FormControl fullWidth variant="standard">
            <InputLabel>Sort By</InputLabel>
            <Select
              value={sortBy}
              onChange={handleChange}
              label="Sort By"
              defaultValue=""
            >
              <MenuItem value={SortType.GameTitle}>{SortType.GameTitle}</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Grid>
      <div id="card-container">
        {sortedGames.map((game) => (
          <GameCard
            key={game.appid}
            id={game.appid}
            name={game.name}
            headerImage={game.headerImage}
          />
        ))}
      </div>
    </div>
  );
};
