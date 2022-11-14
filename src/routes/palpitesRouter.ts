import { Router } from 'express';

import { abreJogo, fechaJogo } from '../controllers/jogosController';


const router = Router();


router.put("/abreJogo/:id", abreJogo);
router.put("/fechaJogo/:id", fechaJogo);

export default router;

