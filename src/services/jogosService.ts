import { abreJogo, fechaJogo } from '../repositories/jogosRepository'


import * as error from '../utils/errors'


export async function abre(id: number){
    

    
    await abreJogo(id);
}
export async function fecha(id: number){
    

    
    await fechaJogo(id);
}
