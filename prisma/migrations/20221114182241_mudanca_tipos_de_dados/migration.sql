/*
  Warnings:

  - The `placarCasa` column on the `jogos` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `placarFora` column on the `jogos` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `abertoPalpites` column on the `jogos` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Changed the type of `palpiteCasa` on the `palpites` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `palpiteFora` on the `palpites` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "jogos" DROP COLUMN "placarCasa",
ADD COLUMN     "placarCasa" INTEGER NOT NULL DEFAULT 0,
DROP COLUMN "placarFora",
ADD COLUMN     "placarFora" INTEGER NOT NULL DEFAULT 0,
DROP COLUMN "abertoPalpites",
ADD COLUMN     "abertoPalpites" BOOLEAN NOT NULL DEFAULT true;

-- AlterTable
ALTER TABLE "palpites" DROP COLUMN "palpiteCasa",
ADD COLUMN     "palpiteCasa" INTEGER NOT NULL,
DROP COLUMN "palpiteFora",
ADD COLUMN     "palpiteFora" INTEGER NOT NULL;
