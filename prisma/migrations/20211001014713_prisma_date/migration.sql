/*
  Warnings:

  - Made the column `nome` on table `Genero` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `Filme` MODIFY `data_lancamento` DATETIME(3);

-- AlterTable
ALTER TABLE `Genero` MODIFY `nome` VARCHAR(191) NOT NULL;
