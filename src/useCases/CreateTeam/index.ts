import { TeamRepository } from "../../repositories/TeamRepository";
import { CreateTeamController } from "./CreateTeamController";
import { CreateTeamUseCase } from "./CreateTeamUseCase";

const teamRepository = new TeamRepository();
const createTeamUserCase = new CreateTeamUseCase(teamRepository);

const createTeamController = new CreateTeamController(
    createTeamUserCase
);

export { createTeamController }