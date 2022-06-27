import { ChampionshipRepository } from "../../repositories/ChampionshipRepository";

class GetChampionshipUseCase {

    constructor(private championshipRepository: ChampionshipRepository) {}

    public async execute(id: string){
        return await this.championshipRepository.findById(id);
    }
}

export { GetChampionshipUseCase };