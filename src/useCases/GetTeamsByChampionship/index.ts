import { TeamRepository } from "../../repositories/TeamRepository";
import { GetTeamsByChampionshipController } from "./GetTeamsByChampionshipController";
import { GetTeamsByChampionshipUseCase } from "./GetTeamsByChampionshipUseCase";

const teamRepository = new TeamRepository();
const getTeamsByChampionshipUseCase = new GetTeamsByChampionshipUseCase(teamRepository);

const getTeamsByChampionshipController = new GetTeamsByChampionshipController(
    getTeamsByChampionshipUseCase
);

export { getTeamsByChampionshipController }