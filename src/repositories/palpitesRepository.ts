import prisma from '../db';
import { palpites } from '@prisma/client';

import { CreatePalpiteData } from '../types/palpitesTypes';
import { exit } from 'process';


export async function insert(palpite: CreatePalpiteData) {
    
    await prisma.palpites.create({ data: palpite });
}

export async function getByUser(userId: number) {
        
   
    return prisma.palpites.findMany({
        where: { userId: userId }
    });
}