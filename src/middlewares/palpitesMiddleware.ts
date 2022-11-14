import { Request, Response, NextFunction } from 'express';

import {palpitesSchema} from "../schemas/palpitesSchema";

export async function palpitesMiddleware(req:Request, res:Response, next:NextFunction) {
    
    const validate = palpitesSchema.validate(req.body);

    if (validate.error) {
        return res.status(422).send(validate.error);
    }   

    next();
}


