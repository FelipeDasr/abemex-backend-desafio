import { ChampionshipRepository } from "../../repositories/ChampionshipRepository";
import { TeamRepository } from "../../repositories/TeamRepository";
import { DeleteTeamController } from "./DeleteTeamController";
import { DeleteTeamUseCase } from "./DeleteTeamUseCase";

const championshipRepository = new ChampionshipRepository();
const teamRepository = new TeamRepository();

const deleteTeamUseCase = new DeleteTeamUseCase(
    teamRepository,
    championshipRepository
);

const deleteTeamController = new DeleteTeamController(
    deleteTeamUseCase
);

export { deleteTeamController }