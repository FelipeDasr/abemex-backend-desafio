import { ITeamRecordDTO } from "./TeamDTOs";
import { IMatchDTO } from "./MatchDTOs";

export interface IChampionshipDTO {
    name: string;
    description: string;
    levels: number;
    award: number;
    teamWinnerId: string;
};

export interface IChampionshipRecordDTO extends IChampionshipDTO {
    id: string;
    createdAt: Date;
    closed: boolean;
};

export interface IChampionshipHistoryRecordDTO extends IChampionshipRecordDTO {
    Matches: Omit<IMatchDTO, 'championshipId'>[];
    Championshipteams: {
        teamId: string;
        Team: ITeamRecordDTO;
    }[];
}

export interface IChampionshipSubscribeDTO {
    championshipId: string;
    teamId: string;
}

export interface IChampionshipHistoryDTO extends IChampionshipRecordDTO {
    matches: {
        [key: string]: Omit<IMatchDTO, 'championshipId'>[]
    };
    teams: ITeamRecordDTO[];
}