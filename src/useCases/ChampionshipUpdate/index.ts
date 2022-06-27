import { ChampionshipRepository } from '../../repositories/ChampionshipRepository';
import { ChampionshipUpdateController } from './ChampionshipUpdateController';
import { ChampionshipUpdateUseCase } from './ChampionshipUpdateUseCase';

const championshipRepository = new ChampionshipRepository();

const championshipUpdateUseCase = new ChampionshipUpdateUseCase(
    championshipRepository
);

const championshipUpdateController = new ChampionshipUpdateController(
    championshipUpdateUseCase
);

export { championshipUpdateController };