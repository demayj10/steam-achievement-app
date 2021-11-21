import axios from 'axios';
import {
  AchievementData, GameData, GetAchievementsResponse, GetGamesResponse,
} from '../types';
import { getGameAchievements, submitSteamId } from './steamDataCollectors';

jest.mock('axios');

const GAME_DATA_ITEM: GameData = {
  appid: 'appid',
  name: 'name',
  aboutTheGame: 'aboutTheGame',
  detailedDescription: 'detailedDescription',
  shortDescription: 'shortDescription',
  headerImage: 'headerImage',
  playTime: 100,
};

const ACHIEVEMENT_DATA_ITEM: AchievementData = {
  apiName: 'apiName',
  displayName: 'displayName',
  description: 'description',
  icon: 'icon',
  iconGray: 'iconGray',
  achieved: true,
  unlockTime: 10,
};

describe('test submitSteamId', () => {
  it('should return an empty array of game items', async () => {
    const steamId = 'steamId';
    const expectedRes: GameData[] = [];

    const mockResponse: GetGamesResponse = {
      data: [],
    };
    axios.get = jest.fn().mockResolvedValueOnce(mockResponse);

    const actualRes: GameData[] = await submitSteamId(steamId);

    expect(actualRes).toEqual(expectedRes);
  });

  it('should return an array of game items', async () => {
    const steamId = 'steamId';
    const expectedRes: GameData[] = [GAME_DATA_ITEM];

    const mockResponse: GetGamesResponse = {
      data: [GAME_DATA_ITEM],
    };
    axios.get = jest.fn().mockResolvedValueOnce(mockResponse);

    const actualRes: GameData[] = await submitSteamId(steamId);

    expect(actualRes).toEqual(expectedRes);
  });
});

describe('test getGameAchievements', () => {
  it('should return an array of achievements', async () => {
    const steamId = 'steamId';
    const gameId = 'gameId';

    const expectedRes: AchievementData[] = [ACHIEVEMENT_DATA_ITEM];

    const mockResponse: GetAchievementsResponse = {
      data: [ACHIEVEMENT_DATA_ITEM],
    };
    axios.get = jest.fn().mockResolvedValueOnce(mockResponse);

    const actualRes: AchievementData[] = await getGameAchievements(steamId, gameId);

    expect(actualRes).toEqual(expectedRes);
  });
});
