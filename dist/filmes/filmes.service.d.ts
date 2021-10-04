import { Filme, Prisma } from '.prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateFilmeDto } from './dto/create-filmes.dto';
export declare class FilmesService {
    private prisma;
    constructor(prisma: PrismaService);
    createFilme(data: CreateFilmeDto): Promise<Filme & {
        genero: import(".prisma/client").Genero[];
        participante: import(".prisma/client").Participante[];
    }>;
    findAll(): Promise<Filme[]>;
    findOne(filmeId: number): Promise<Filme>;
    updateFilme(id: number, data: CreateFilmeDto): Promise<Filme & {
        genero: import(".prisma/client").Genero[];
        participante: import(".prisma/client").Participante[];
    }>;
    deleteOneFilme(where: Prisma.FilmeWhereUniqueInput): Promise<Filme>;
    deleteAllFilmes(): Promise<Prisma.BatchPayload>;
}
