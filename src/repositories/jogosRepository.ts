import prisma from '../db';
import { jogos } from '@prisma/client';


import { exit } from 'process';



export async function abreJogo(id: number) {
        
   
    await prisma.jogos.update({
        where: {
          id: id,
        },
        data: {
            abertoPalpites: true,
        },
    });
}
export async function fechaJogo(id: number) {
        
   
    await prisma.jogos.update({
        where: {
          id: id,
        },
        data: {
            abertoPalpites: false,
        },
    });
}
