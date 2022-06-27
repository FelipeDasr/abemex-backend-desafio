import { TeamRepository } from "../../repositories/TeamRepository";
import { IQueryDTO } from "../../dto/RequestDTOs";

class GetAllTeamsUseCase {

    constructor(private teamRepository: TeamRepository) { }

    public async execute(searchQuery: IQueryDTO) {
        return await this.teamRepository.getAllTeams(searchQuery);
    }
}

export { GetAllTeamsUseCase };