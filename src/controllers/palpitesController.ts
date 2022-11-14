import { Request, Response } from 'express';
import * as palpitesService from '../services/palpitesService';


export async function novoPalpite(req: Request, res: Response) {
    

    await palpitesService.novoPalpite({...req.body});

    res.sendStatus( 201 );
}
