export interface AchievementData {
    apiName: string,
    displayName: string,
    description: string,
    icon: string,
    iconGray: string,
    achieved: boolean,
    unlockTime: number // Date convertable
}

export type StatusType = 'fulfilled' | 'pending' | 'rejected' | 'idle';

export interface GetAchievementsResponse {
    data: AchievementData[]
}

export interface GameData {
    appid: string,
    name: string,
    aboutTheGame: string,
    detailedDescription: string,
    shortDescription: string,
    headerImage: string,
    playTime?: number,
}

export interface GetGamesResponse {
    data: GameData[]
}

export interface GroupData {
    appid: string,
    gameName: string,
    name: string,
    description: string,
    achievements: AchievementData[]
}

export interface AppState {
    steamId: string,
    games: GameData[],
    groups: GroupData[],
    loadedAchievements: AchievementData[],
    appStatus: StatusType,
    error: string | null,
}

export interface HomeState {
    games: GameData[],
}
