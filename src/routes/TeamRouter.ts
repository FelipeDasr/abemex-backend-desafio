import { getTeamsByChampionshipController } from "../useCases/GetTeamsByChampionship";
import { deleteTeamController } from "../useCases/DeleteTeam";
import { createTeamController } from "../useCases/CreateTeam";
import { getTeamController } from "../useCases/GetTeam";
import { getAllTeamsController } from "../useCases/GetAllTeams";

import { Router } from "express";
import { teamUpdateController } from "../useCases/TeamUpdate";
const router = Router();

router.post('/team', createTeamController.handle);
router.get('/team/:id', getTeamController.handle);
router.get('/teams/championship/:id', getTeamsByChampionshipController.handle);
router.get('/teams', getAllTeamsController.handle);
router.delete('/team/:id', deleteTeamController.handle);
router.patch('/team/:id', teamUpdateController.handle);

export { router as TeamRouter };