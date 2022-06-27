import { TeamRepository } from '../../repositories/TeamRepository';
import { ITeamDTO } from '../../dto/TeamDTOs';

class TeamUpdateUseCase {

    constructor(
        private teamRepository: TeamRepository
    ) { }

    public async execute(id: string, data: Partial<ITeamDTO>) {
        return await this.teamRepository.update(id, data);
    }
}

export { TeamUpdateUseCase };