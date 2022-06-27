import { IChampionshipHistoryDTO } from "../../dto/ChampionshipDTOs";
import { ChampionshipRepository } from "../../repositories/ChampionshipRepository";
import { championshipHistorySerialized } from "../utils/serializers";

class GetChampionshipHistoryUseCase {

    constructor(
        private championshipRepository: ChampionshipRepository
    ) {}

    public async execute(id: string): Promise<IChampionshipHistoryDTO>{
        return championshipHistorySerialized(
            await this.championshipRepository.getChampionshipHistoryById(id)
        );
    }
}

export { GetChampionshipHistoryUseCase };