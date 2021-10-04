/*
  Warnings:

  - You are about to drop the column `funcao` on the `Participante` table. All the data in the column will be lost.
  - Added the required column `ator` to the `Participante` table without a default value. This is not possible if the table is not empty.
  - Added the required column `staff` to the `Participante` table without a default value. This is not possible if the table is not empty.
  - Made the column `ano_nascimento` on table `Participante` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `Participante` DROP COLUMN `funcao`,
    ADD COLUMN `ator` BOOLEAN NOT NULL,
    ADD COLUMN `staff` BOOLEAN NOT NULL,
    MODIFY `ano_nascimento` INTEGER NOT NULL;
