import { championshipSubscribeController } from "../useCases/ChampionshipSubscribe";
import { createChampionshipController } from "../useCases/CreateChampionship";
import { getChampionshipHistoryController } from "../useCases/GetChampionshipHistory";
import { getChampionshipController } from "../useCases/GetChampionship";
import { getAllChampionshipController } from "../useCases/GetAllChampionships";
import { championshipUpdateController } from "../useCases/ChampionshipUpdate";

import { Router } from "express";
const router = Router();

router.post('/championship', createChampionshipController.handle);
router.post('/championship/subscribe', championshipSubscribeController.handle);
router.get('/championship/history/:id', getChampionshipHistoryController.handle);
router.get('/championship/:id', getChampionshipController.handle);
router.get('/championships', getAllChampionshipController.handle);
router.patch('/championship/:id', championshipUpdateController.handle);

export { router as ChampionshipRouter };