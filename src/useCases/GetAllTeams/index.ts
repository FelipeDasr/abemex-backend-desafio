import { TeamRepository } from "../../repositories/TeamRepository";
import { GetAllTeamsController } from "./GetAllTeamsController";
import { GetAllTeamsUseCase } from "./GetAllTeamsUseCase";

const teamRepository = new TeamRepository();
const getAllTeamsUseCase = new GetAllTeamsUseCase(teamRepository);

const getAllTeamsController = new GetAllTeamsController(
    getAllTeamsUseCase
);

export { getAllTeamsController }