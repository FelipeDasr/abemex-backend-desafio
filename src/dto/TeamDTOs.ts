export interface ITeamDTO {
    name: string;
    playersInitials: string;
};

export interface ITeamRecordDTO extends ITeamDTO {
    id: string;
    createdAt: Date;
    deletedAt: Date | null;
};

export interface ITeamAssociationRecordDTO {
    teamId: string;
    Team: ITeamRecordDTO;
}