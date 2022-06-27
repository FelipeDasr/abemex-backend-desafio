import { ChampionshipRepository } from "../../repositories/ChampionshipRepository";
import { MatchRepository } from "../../repositories/MatchRepository";
import { TeamRepository } from "../../repositories/TeamRepository";
import { StartChampionshipUseCase } from "./StartChampionshipUseCase";

const championshipRepository = new ChampionshipRepository()
const matchRepository = new MatchRepository();
const teamRepository = new TeamRepository()

const startChampionshipUseCase = new StartChampionshipUseCase(
    championshipRepository,
    matchRepository,
    teamRepository
);

export { startChampionshipUseCase };