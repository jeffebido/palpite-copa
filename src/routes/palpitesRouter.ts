import { Router } from 'express';

import { novoPalpite, getPalpitesByUser, deletaPalpite } from '../controllers/palpitesController';

import { palpitesMiddleware } from '../middlewares/palpitesMiddleware';

const router = Router();


router.post("/palpite", palpitesMiddleware, novoPalpite);
router.get("/palpites/:userId", getPalpitesByUser);
router.delete("/palpite/:id", deletaPalpite);

export default router;

