/*
  Warnings:

  - Added the required column `timeCasa` to the `jogos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `timeFora` to the `jogos` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "jogos" ADD COLUMN     "timeCasa" TEXT NOT NULL,
ADD COLUMN     "timeFora" TEXT NOT NULL;
