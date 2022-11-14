import { Router } from 'express';

import { novoPalpite, getPalpitesByUser } from '../controllers/palpitesController';

import { palpitesMiddleware } from '../middlewares/palpitesMiddleware';

const router = Router();


router.post("/novoPalpite", palpitesMiddleware, novoPalpite);
router.get("/palpitesUsuario/:userId", getPalpitesByUser);


export default router;

