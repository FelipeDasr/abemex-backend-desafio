export interface IMatchDTO {
    championshipId: string;
    level: number;
    team1Id: string;
    team1Score: number;
    team2Id: string;
    team2Score: number;
    teamWinnerId: string;
};

export interface IMatchRecordDTO extends IMatchDTO {
    id: string;
}