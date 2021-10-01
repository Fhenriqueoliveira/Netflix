import {
  Controller,
  Get,
  Post,
  Delete,
  Put,
  Body,
  Param,
  ValidationPipe,
  UsePipes,
  ParseIntPipe,
} from '@nestjs/common';
import { CreateFilmeDto } from './dto/create-filmes.dto';
import { FilmesService } from './filmes.service';
import { Filme } from '.prisma/client';

@Controller('filmes')
export class FilmesController {
  constructor(private filmeService: FilmesService) {}

  @Post('/create')
  @UsePipes(ValidationPipe)
  async create(@Body() createFilme: CreateFilmeDto): Promise<Filme> {
    return this.filmeService.createFilme(createFilme);
  }
}
