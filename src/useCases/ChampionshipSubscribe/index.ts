import { ChampionshipRepository } from "../../repositories/ChampionshipRepository";
import { TeamRepository } from "../../repositories/TeamRepository";
import { startChampionshipUseCase } from "../StartChampionship";
import { ChampionshipSubscribeController } from "./ChampionshipSubscribeController";
import { ChampionshipSubscribeUseCase } from "./ChampionshipSubscribeUseCase";

const championshipRepository = new ChampionshipRepository();
const teamRepository = new TeamRepository();

const championshipSubscribeUseCase = new ChampionshipSubscribeUseCase(
    startChampionshipUseCase,
    championshipRepository,
    teamRepository
);

const championshipSubscribeController = new ChampionshipSubscribeController(
    championshipSubscribeUseCase
);

export { championshipSubscribeController };