import { IChampionshipHistoryRecordDTO } from "../../../dto/ChampionshipDTOs";
import { IMatchDTO } from "../../../dto/MatchDTOs";
import { ChampionshipTeam } from "../../../models/ChampionshipTeam";

export const championshipHistorySerialized = (
    chpHistory: IChampionshipHistoryRecordDTO
) => {

    return {
        id: chpHistory.id,
        name: chpHistory.name,
        description: chpHistory.description,
        levels: chpHistory.levels,
        award: chpHistory.award,
        teamWinnerId: chpHistory.teamWinnerId,
        closed: chpHistory.closed,
        createdAt: chpHistory.createdAt,
        matches: matchesSerialized(chpHistory.Matches),
        teams: chpHistory.Championshipteams.map(t => ({ ...t.Team }))
    };
}

const matchesSerialized = (matches: Omit<IMatchDTO, 'championshipId'>[]) => {

    let serializedMatches: {
        [key: string]: Omit<IMatchDTO, 'championshipId'>[]
    } = {};

    matches.forEach(m => {
        const phaseIndex = `phase-${m.level}`;
        if (!serializedMatches[phaseIndex]) serializedMatches[phaseIndex] = [m];
        else serializedMatches[phaseIndex].push(m);
    });

    return serializedMatches;
}