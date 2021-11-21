import {
  createAsyncThunk,
  createSlice,
  Slice,
} from '@reduxjs/toolkit';
import {
  AchievementData, AppState, GameData, StatusType,
} from './types';
import { getGameAchievements, submitSteamId } from './lib/steamDataCollectors';
import { RootState } from './app/store';

const initialState: AppState = {
  steamId: '',
  games: [],
  groups: [],
  loadedAchievements: [],
  appStatus: 'idle',
  error: null,
};

const fetchGames = createAsyncThunk(
  'games/fetchGames',
  async (steamId: string): Promise<{ steamId: string, games: GameData[]}> => {
    const gameData = await submitSteamId(steamId);
    return { steamId, games: gameData };
  },
);

const fetchAchievements = createAsyncThunk(
  'game/fetchAchievements',
  async ({ steamId, gameId }: {steamId: string, gameId: string}): Promise<AchievementData[]> => {
    const achievementData = await getGameAchievements(steamId, gameId);
    return achievementData as AchievementData[];
  },
);

const appSlice: Slice = createSlice({
  name: 'app',
  initialState,
  reducers: {
  },
  extraReducers(builder) {
    builder
      .addCase(fetchGames.pending, (state: AppState) => (
        { ...state, appStatus: 'pending' }
      ))
      .addCase(fetchGames.fulfilled, (state: AppState, { payload }) => (
        {
          ...state,
          appStatus: 'fulfilled',
          steamId: payload.steamId,
          games: state.games.concat(payload.games),
        }
      )).addCase(fetchGames.rejected, (state: AppState) => (
        { ...state, appStatus: 'rejected' }
      ))
      .addCase(fetchAchievements.pending, (state: AppState) => (
        { ...state, appStatus: 'pending' }
      ))
      .addCase(fetchAchievements.fulfilled, (state: AppState, { payload }) => (
        {
          ...state,
          appStatus: 'fulfilled',
          loadedAchievements: payload,
        }
      ))
      .addCase(fetchAchievements.rejected, (state: AppState) => (
        { ...state, appStatus: 'rejected' }
      ));
  },
});

export default appSlice.reducer;

export { fetchGames, fetchAchievements };

export const selectAllGames = (state: RootState): GameData[] => state.app.games;
export const selectGameById = (state: RootState, gameId: string): GameData => (
  state.app.games.find((game: GameData) => game.appid === gameId)
);
export const selectLoadedAchievements = (state: RootState): AchievementData[] => (
  state.app.loadedAchievements
);
export const selectAppStatus = (state: RootState): StatusType => state.app.appStatus;
export const selectSteamId = (state: RootState): string => state.app.steamId;
