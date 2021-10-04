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
  @Get('/list')
  @UsePipes(ValidationPipe)
  async findMany(): Promise<Filme[]> {
    return this.filmeService.findAll();
  }
  @Get('/list/:id')
  @UsePipes(ValidationPipe)
  async findUnique(@Param('id', ParseIntPipe) id: number) {
    return this.filmeService.findOne(id);
  }

  @Put('/update/:id')
  @UsePipes(ValidationPipe)
  async update(
    @Body() updateFilme: CreateFilmeDto,
    @Param('id', ParseIntPipe) id: number,
  ): Promise<Filme> {
    return this.filmeService.updateFilme(id, updateFilme);
  }
  @Delete('/deleteOne/:id')
  @UsePipes(ValidationPipe)
  async delete(@Param('id') id: string) {
    return this.filmeService.deleteOneFilme({ id: Number(id) });
  }
  @Delete('/deleteAll')
  @UsePipes(ValidationPipe)
  async deleteMany() {
    return this.filmeService.deleteAllFilmes();
  }
}
