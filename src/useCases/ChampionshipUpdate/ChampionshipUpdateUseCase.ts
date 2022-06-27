import { ChampionshipRepository } from '../../repositories/ChampionshipRepository';
import { IChampionshipDTO } from '../../dto/ChampionshipDTOs';

class ChampionshipUpdateUseCase {

    constructor(
        private championshipRepository: ChampionshipRepository
    ) { }

    public async execute(id: string, data: Partial<Omit<IChampionshipDTO, 'levels'>>) {
        return await this.championshipRepository.update(id, data);
    }
}

export { ChampionshipUpdateUseCase };