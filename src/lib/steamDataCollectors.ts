import axios from 'axios';
import {
  AchievementData, GameData, GetAchievementsResponse, GetGamesResponse,
} from '../types';

const BASE_URL = 'https://steam-achievements-server.herokuapp.com';

export const submitSteamId = async (steamId: string): Promise<GameData[]> => {
  const url = `${BASE_URL}/gameDetails/${steamId}`;
  const rawGameData: GetGamesResponse = await axios.get(url);

  return rawGameData.data.games;
};

export const getGameAchievements = async (
  steamId: string,
  gameId: string,
): Promise<AchievementData[]> => {
  const url = `${BASE_URL}/achievementDetails/${steamId}/game/${gameId}`;
  const rawAchievementData: GetAchievementsResponse = await axios.get(url);

  return rawAchievementData.data.achievements;
};
