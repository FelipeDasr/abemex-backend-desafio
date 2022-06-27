import { ChampionshipRepository } from "../../repositories/ChampionshipRepository";
import { GetChampionshipController } from "./GetChampionshipController";
import { GetChampionshipUseCase } from "./GetChampionshipUseCase";

const championshipRepository = new ChampionshipRepository();
const getChampionshipUseCase = new GetChampionshipUseCase(
    championshipRepository
);

const getChampionshipController = new GetChampionshipController(
    getChampionshipUseCase
);

export { getChampionshipController };