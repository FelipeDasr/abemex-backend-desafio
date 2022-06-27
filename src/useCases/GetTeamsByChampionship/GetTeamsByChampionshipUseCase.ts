import { IQueryDTO } from "../../dto/RequestDTOs";
import { TeamRepository } from "../../repositories/TeamRepository";
import { teamAssociationSerialized } from "../utils/serializers";

class GetTeamsByChampionshipUseCase {

    constructor(private teamRepository: TeamRepository) { }

    public async execute(
        championshipId: string, searchQuery: Omit<IQueryDTO, 'name'>
    ) {
        const teams = await this.teamRepository.getTeamsByChampionshipId(
            championshipId, searchQuery
        );

        return {
            count: teams.count,
            teams: teamAssociationSerialized(teams.teams)
        }
    }
}

export { GetTeamsByChampionshipUseCase };