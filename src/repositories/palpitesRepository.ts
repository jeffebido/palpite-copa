import prisma from '../db';
import { palpites } from '@prisma/client';

import { CreatePalpiteData } from '../types/palpitesTypes';
import { exit } from 'process';


export async function insert(palpite: CreatePalpiteData) {
    
    await prisma.palpites.create({ data: palpite });
}

