import axios from 'axios';
import { GetAchievementsResponse, GetGamesResponse } from '../types';

const BASE_URL = 'https://steam-achievements-server.herokuapp.com';

export const submitSteamId = async (steamId: string): Promise<void> => {
  const url = `${BASE_URL}/gameDetails/${steamId}`;
  const rawGameData: GetGamesResponse = await axios.get(url);

  console.log(rawGameData.data);
};

export const getGameAchievements = async (steamId: string, gameId: string): Promise<void> => {
  const url = `${BASE_URL}/achievementDetails/${steamId}/game/${gameId}`;
  const rawAchievementData: GetAchievementsResponse = await axios.get(url);

  console.log(rawAchievementData.data);
};
