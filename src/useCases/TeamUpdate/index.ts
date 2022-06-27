import { TeamRepository } from '../../repositories/TeamRepository';
import { TeamUpdateController } from './TeamUpdateController';
import { TeamUpdateUseCase } from './TeamUpdateUseCase';

const teamRepository = new TeamRepository();

const teamUpdateUseCase = new TeamUpdateUseCase(
    teamRepository
);

const teamUpdateController = new TeamUpdateController(
    teamUpdateUseCase
);

export { teamUpdateController };