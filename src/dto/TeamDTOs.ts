export interface ITeamDTO {
    name: string;
    playersInitials: string;
};

export interface ITeamRecordDTO extends ITeamDTO {
    id: string;
    createdAt: Date;
    deletedAt: Date | null;
};