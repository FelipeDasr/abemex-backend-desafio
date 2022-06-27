import { ChampionshipRepository } from "../../repositories/ChampionshipRepository";
import { IChampionshipDTO } from "../../dto/ChampionshipDTOs";

class CreateChampionshipUseCase {

    constructor(private championshipRepository: ChampionshipRepository) {}

    public async execute(data: IChampionshipDTO){
        if (await this.championshipRepository.findByName(data.name)) {
            throw new Error('The championship already exists');
        }
        return await this.championshipRepository.create(data);
    }
}

export { CreateChampionshipUseCase };