import { Router } from 'express';
const AppRouter = Router();

import { ChampionshipRouter } from './ChampionshipRouter';
import { TeamRouter } from './TeamRouter';

AppRouter.use(ChampionshipRouter);
AppRouter.use(TeamRouter);

export { AppRouter };