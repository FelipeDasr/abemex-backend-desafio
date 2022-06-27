import { ChampionshipRepository } from "../../repositories/ChampionshipRepository";
import { CreateChampionshipController } from "./CreateChampionshipController";
import { CreateChampionshipUseCase } from "./CreateChampionshipUseCase";

const championshipRepository = new ChampionshipRepository();
const createChampionshipUseCase = new CreateChampionshipUseCase(
    championshipRepository
);

const createChampionshipController = new CreateChampionshipController(
    createChampionshipUseCase
);

export { createChampionshipController };