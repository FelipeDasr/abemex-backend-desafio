import { MatchRepository } from "../../repositories/MatchRepository";
import { ITeamRecordDTO } from "../../dto/TeamDTOs";

import {
    generateScore,
    splitTeamsIntoPairs,
    shuffleTeams
} from "../utils";
import { TeamRepository } from "../../repositories/TeamRepository";
import { ChampionshipRepository } from "../../repositories/ChampionshipRepository";

class StartChampionshipUseCase {

    constructor(
        private championshipRepository: ChampionshipRepository,
        private matchRepository: MatchRepository,
        private teamRepository: TeamRepository
    ) { }

    public async execute(championshipId: string) {
        const teams = await this.teamRepository.getTeamsByChampionshipId(championshipId, {
            page: 0,
            limit: 10000
        });

        const shuffledTeams = shuffleTeams(teams.teams);

        // Recursively generate levels until you reach the winner
        const winnerTeam = (await this.startThePhase(shuffledTeams, 1, championshipId))[0];

        // Close the championship and define the team winner
        await this.championshipRepository.closeChampionship(championshipId, winnerTeam.id);
    }

    private async startThePhase(
        teams: ITeamRecordDTO[],
        phase: number,
        championshipId: string
    ): Promise<ITeamRecordDTO[]> {

        const teamsInPairs = splitTeamsIntoPairs(teams);

        // Generate the phase matches
        const phaseWinners = await Promise.all(teamsInPairs.map(teams => {
            return this.generateMatch(teams, phase, championshipId);
        }));

        if (phaseWinners.length === 1) {
            // Last phase result
            return phaseWinners;
        }

        // Recursive function to generate more matches
        return await this.startThePhase(phaseWinners, phase + 1, championshipId);
    }

    private async generateMatch(
        teams: ITeamRecordDTO[],
        phase: number,
        championshipId: string
    ) {

        const team1Score = generateScore();
        const team2Score = generateScore();

        // Get the team winner
        const teamWinner = team1Score > team2Score ? teams[0] : teams[1];

        // Create the match
        await this.matchRepository.create({
            level: phase,
            championshipId,
            team1Id: teams[0].id,
            team1Score,
            team2Id: teams[1].id,
            team2Score,
            teamWinnerId: teamWinner.id
        });

        return teamWinner;
    }
}

export { StartChampionshipUseCase };