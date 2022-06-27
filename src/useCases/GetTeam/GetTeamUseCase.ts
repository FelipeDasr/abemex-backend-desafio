import { TeamRepository } from "../../repositories/TeamRepository";

class GetTeamUseCase {

    constructor(private teamRepository: TeamRepository) { }

    public async execute(id: string){
        return await this.teamRepository.findById(id);
    }
}

export { GetTeamUseCase };