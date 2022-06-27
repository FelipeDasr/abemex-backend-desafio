import { IMatchDTO } from "../../dto/MatchDTOs";
import { ITeamRecordDTO } from "../../dto/TeamDTOs";

export const shuffleTeams = (teams: { Team: ITeamRecordDTO }[]): ITeamRecordDTO[] => {
    return teams
        .map(team => ({ team, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ team }) => ({ ...team.Team }));
}

export const splitTeamsIntoPairs = (teams: ITeamRecordDTO[]): ITeamRecordDTO[][] => {
    var teamInPairs = [];

    for (var i = 0; i < teams.length; i += 2) {
        teamInPairs.push(teams.slice(i, i + 2));
    }

    /*
     [team1, team2, team3, team4, team5, team6,] => [
        [team1, team2], // Match
        [team3, team4], // Match
        [team5, team6]  // Match
    ]
    */
    return teamInPairs;
}

export const generateScore = () => {
    return Math.ceil(Math.random() * (1000 - 1) + 1);
}