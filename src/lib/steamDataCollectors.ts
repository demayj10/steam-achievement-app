import axios from 'axios';
import {
  AchievementData, GameData, GetAchievementsResponse, GetGamesResponse,
} from '../types';

const BASE_URL = 'https://steam-achievements-server.herokuapp.com';

export const submitSteamId = async (steamId: string): Promise<GameData[]> => {
  const url = `${BASE_URL}/gameDetails/${steamId}`;
  const rawGameData: GetGamesResponse = await axios.get(url);
  const uniqueIds = new Set<string>();
  const uniqueGames: GameData[] = [];

  rawGameData.data.forEach((game) => {
    if (!uniqueIds.has(game.appid)) {
      uniqueIds.add(game.appid);
      uniqueGames.push(game);
    }
  });

  return uniqueGames;
};

export const getGameAchievements = async (
  steamId: string,
  gameId: string,
): Promise<AchievementData[]> => {
  const url = `${BASE_URL}/achievementDetails/${steamId}/game/${gameId}`;

  const rawAchievementData: GetAchievementsResponse = await axios.get(url);

  return rawAchievementData.data;
};
