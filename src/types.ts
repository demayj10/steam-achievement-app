export interface AchievementData {
    apiName: string,
    displayName: string,
    description: string,
    icon: string,
    iconGray: string,
    achieved: boolean,
    unlockTime: number // Date convertable
}

export interface GetAchievementsResponse {
    data: {
        achievements: AchievementData[];
    }
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
    data: {
        games: GameData[];
    }
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
    groups: GroupData[]
}
