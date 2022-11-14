import { Router } from 'express';

import { novoPalpite} from '../controllers/palpitesController';

import { palpitesMiddleware } from '../middlewares/palpitesMiddleware';

const router = Router();


router.post("/novoPalpite", palpitesMiddleware, novoPalpite);


export default router;

