import { IQueryDTO } from "../../dto/RequestDTOs";
import { TeamRepository } from "../../repositories/TeamRepository";

class GetTeamsByChampionshipUseCase {

    constructor(private teamRepository: TeamRepository) { }

    public async execute(
        championshipId: string, searchQuery: Omit<IQueryDTO, 'name'>
    ) {
        return await this.teamRepository.getTeamsByChampionshipId(
            championshipId, searchQuery
        );
    }
}

export { GetTeamsByChampionshipUseCase };