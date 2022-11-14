import { palpites } from '@prisma/client';

export type CreatePalpiteData = Omit<palpites, 'id' | "createdAt" >;
