import { ChampionshipRepository } from "../../repositories/ChampionshipRepository";
import { GetAllChampionshipController } from "./GetAllChampionshipController";
import { GetAllChampionshipUseCase } from "./GetAllChampionshipUseCase";

const championshipRepository = new ChampionshipRepository();
const getAllChampionshipUseCase = new GetAllChampionshipUseCase(
    championshipRepository
);

const getAllChampionshipController = new GetAllChampionshipController(
    getAllChampionshipUseCase
);

export { getAllChampionshipController };