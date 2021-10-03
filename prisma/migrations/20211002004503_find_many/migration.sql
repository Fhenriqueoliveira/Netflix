/*
  Warnings:

  - You are about to drop the column `data_lancamento` on the `Filme` table. All the data in the column will be lost.
  - Added the required column `ano_lancamento` to the `Filme` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Filme` DROP COLUMN `data_lancamento`,
    ADD COLUMN `ano_lancamento` INTEGER NOT NULL;
