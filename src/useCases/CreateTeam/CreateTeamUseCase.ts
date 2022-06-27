import { TeamRepository } from "../../repositories/TeamRepository";
import { ITeamDTO } from "../../dto/TeamDTOs";

class CreateTeamUseCase {

    constructor(private teamRepository: TeamRepository) { }

    public async execute(data: ITeamDTO) {
        if (await this.teamRepository.findByName(data.name)) {
            throw new Error('The team already exists');
        }
        return await this.teamRepository.create(data);
    }
}

export { CreateTeamUseCase };