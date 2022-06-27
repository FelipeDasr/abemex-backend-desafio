import { ChampionshipRepository } from "../../repositories/ChampionshipRepository";
import { IQueryDTO } from "../../dto/RequestDTOs";

class GetAllChampionshipUseCase {

    constructor(private championshipRepository: ChampionshipRepository) {}

    public async execute(searchQuery: IQueryDTO){
        return await this.championshipRepository.getAllChampionships(searchQuery);
    }
}

export { GetAllChampionshipUseCase };