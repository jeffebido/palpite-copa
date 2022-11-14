import { Request, Response } from 'express';
import * as palpitesService from '../services/palpitesService';


export async function novoPalpite(req: Request, res: Response) {
    

    await palpitesService.novoPalpite({...req.body});

    res.sendStatus( 201 );
}


export async function getPalpitesByUser(req: Request, res: Response) {
    
    const { userId } = req.params;

    const paplites = await palpitesService.getPalpitesByUser(+userId);

    res.send( paplites );
}

export async function deletaPalpite(req: Request, res: Response) {
    
    const { id } = req.params;

    await palpitesService.deleta(+id);

    res.sendStatus( 202 );
}