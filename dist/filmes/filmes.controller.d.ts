import { CreateFilmeDto } from './dto/create-filmes.dto';
import { FilmesService } from './filmes.service';
import { Filme } from '.prisma/client';
export declare class FilmesController {
    private filmeService;
    constructor(filmeService: FilmesService);
    create(createFilme: CreateFilmeDto): Promise<Filme>;
}
