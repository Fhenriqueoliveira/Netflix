import {
  Controller,
  Post,
  Body,
  UsePipes,
  ValidationPipe,
  Get,
  Param,
  ParseIntPipe,
  Put,
  Delete,
} from '@nestjs/common';
import { CreateParticipanteDto } from './dto/create-participantes.dto';
import { ParticipantesService } from './participante.service';
import { Participante } from '.prisma/client';

@Controller('participantes')
export class ParticipantesController {
  constructor(private participantesService: ParticipantesService) {}

  @Post('/create')
  @UsePipes(ValidationPipe)
  async create(
    @Body() createParticipante: CreateParticipanteDto,
  ): Promise<Participante> {
    return this.participantesService.create(createParticipante);
  }

  @Get('/findAll')
  @UsePipes(ValidationPipe)
  async findMany(): Promise<Participante[]> {
    return this.participantesService.findAll();
  }

  @Get('/findOne/:id')
  @UsePipes(ValidationPipe)
  async findUnique(@Param('id', ParseIntPipe) id: number) {
    return this.participantesService.findOne(id);
  }

  @Put('/update/:id')
  @UsePipes(ValidationPipe)
  async update(
    @Body() updateParticipante: CreateParticipanteDto,
    @Param('id', ParseIntPipe) id: number,
  ): Promise<Participante> {
    return this.participantesService.update(id, updateParticipante);
  }

  @Delete('/deleteOne/:id')
  @UsePipes(ValidationPipe)
  async delete(@Param('id') id: string) {
    return this.participantesService.deleteOne({ id: Number(id) });
  }

  @Delete('/deleteAll')
  @UsePipes(ValidationPipe)
  async deleteMany() {
    return this.participantesService.deleteAll();
  }
}
