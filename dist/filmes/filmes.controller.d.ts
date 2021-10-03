import { CreateFilmeDto } from './dto/create-filmes.dto';
import { FilmesService } from './filmes.service';
import { Filme } from '.prisma/client';
export declare class FilmesController {
    private filmeService;
    constructor(filmeService: FilmesService);
    create(createFilme: CreateFilmeDto): Promise<Filme>;
    findMany(): Promise<Filme[]>;
    findUnique(id: number): Promise<Filme>;
    update(updateFilme: CreateFilmeDto, id: number): Promise<Filme>;
    delete(id: string): Promise<Filme>;
    deleteMany(): Promise<import(".prisma/client").Prisma.BatchPayload>;
}
