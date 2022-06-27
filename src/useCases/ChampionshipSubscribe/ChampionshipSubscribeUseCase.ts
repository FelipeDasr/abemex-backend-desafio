import { ChampionshipRepository } from "../../repositories/ChampionshipRepository";
import { IChampionshipSubscribeDTO } from "../../dto/ChampionshipDTOs";
import { TeamRepository } from "../../repositories/TeamRepository";
import { StartChampionshipUseCase } from "../StartChampionship/StartChampionshipUseCase";

class ChampionshipSubscribeUseCase {

    constructor(
        private startChampionshipUseCase: StartChampionshipUseCase,
        private championshipRepository: ChampionshipRepository,
        private teamRepository: TeamRepository
    ) { }

    public async execute(subscriptionData: IChampionshipSubscribeDTO) {
        const { championshipId, teamId } = subscriptionData;

        // If the championship or the team does not exists an error will be thrown
        const championship = await this.championshipRepository.findById(championshipId);
        await this.teamRepository.findById(teamId);

        // Calculation of available vacancies
        const totalTeams = await this.championshipRepository.countTeams(championshipId);
        const availableVacancies = Math.pow(2, championship.levels) - totalTeams;

        if (await this.championshipRepository.teamIsAlreadyRegistered(subscriptionData)) {
            throw new Error("The team is already registered");
        }

        if (availableVacancies) {
            await this.championshipRepository.addNewTeam(subscriptionData);

            // if the condition is true, it means the championship is ready to start
            if (availableVacancies - 1 === 0) this.startChampionshipUseCase.execute(championshipId);

            return { message: "Team registered successfully" }
        }
        else {
            throw new Error("Championship slots are full");
        }
    }
}

export { ChampionshipSubscribeUseCase };