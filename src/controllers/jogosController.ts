import { Request, Response } from 'express';
import * as jogosService from '../services/jogosService';




export async function abreJogo(req: Request, res: Response) {
    
    const { id } = req.params;

    await jogosService.abre(+id);

    res.sendStatus( 202 );
}
export async function fechaJogo(req: Request, res: Response) {
    
    const { id } = req.params;

    await jogosService.fecha(+id);

    res.sendStatus( 202 );
}