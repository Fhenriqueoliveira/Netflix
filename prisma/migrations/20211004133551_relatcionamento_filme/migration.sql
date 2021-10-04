/*
  Warnings:

  - You are about to drop the column `filmeId` on the `Genero` table. All the data in the column will be lost.
  - You are about to drop the column `data_nascimento` on the `Participante` table. All the data in the column will be lost.
  - You are about to drop the column `filmeId` on the `Participante` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `Genero` DROP FOREIGN KEY `Genero_filmeId_fkey`;

-- DropForeignKey
ALTER TABLE `Participante` DROP FOREIGN KEY `Participante_filmeId_fkey`;

-- AlterTable
ALTER TABLE `Filme` MODIFY `tempo_duracao` INTEGER,
    MODIFY `ano_lancamento` INTEGER;

-- AlterTable
ALTER TABLE `Genero` DROP COLUMN `filmeId`;

-- AlterTable
ALTER TABLE `Participante` DROP COLUMN `data_nascimento`,
    DROP COLUMN `filmeId`,
    ADD COLUMN `ano_nascimento` INTEGER;

-- CreateTable
CREATE TABLE `_FilmeToGenero` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_FilmeToGenero_AB_unique`(`A`, `B`),
    INDEX `_FilmeToGenero_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_FilmeToParticipante` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_FilmeToParticipante_AB_unique`(`A`, `B`),
    INDEX `_FilmeToParticipante_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `_FilmeToGenero` ADD FOREIGN KEY (`A`) REFERENCES `Filme`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_FilmeToGenero` ADD FOREIGN KEY (`B`) REFERENCES `Genero`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_FilmeToParticipante` ADD FOREIGN KEY (`A`) REFERENCES `Filme`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_FilmeToParticipante` ADD FOREIGN KEY (`B`) REFERENCES `Participante`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
