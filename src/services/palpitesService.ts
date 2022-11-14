import { insert, getByUser } from '../repositories/palpitesRepository'

import { CreatePalpiteData} from '../types/palpitesTypes';

import * as error from '../utils/errors'

export async function novoPalpite(data: CreatePalpiteData){
    

    
    await insert(data);
}

export async function getPalpitesByUser(userId: number){
    

    
    return await getByUser(userId);
}
