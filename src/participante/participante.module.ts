import { Module } from '@nestjs/common';
import { ParticipanteService } from './participante.service';
import { ParticipanteController } from './participante.controller';

@Module({
  providers: [ParticipanteService],
  controllers: [ParticipanteController]
})
export class ParticipanteModule {}
