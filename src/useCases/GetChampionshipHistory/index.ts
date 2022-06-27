import { ChampionshipRepository } from "../../repositories/ChampionshipRepository";
import { GetChampionshipHistoryController } from "./GetChampionshipHistoryController";
import { GetChampionshipHistoryUseCase } from "./GetChampionshipHistoryUseCase";

const championshipRepository = new ChampionshipRepository();
const getChampionshipHistoryUseCase = new GetChampionshipHistoryUseCase(
    championshipRepository
);

const getChampionshipHistoryController = new GetChampionshipHistoryController(
    getChampionshipHistoryUseCase
);

export { getChampionshipHistoryController };