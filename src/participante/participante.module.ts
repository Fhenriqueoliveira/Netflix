import { Module } from '@nestjs/common';
import { ParticipantesService } from './participante.service';
import { ParticipantesController } from './participante.controller';

@Module({
  providers: [ParticipantesService],
  controllers: [ParticipantesController],
})
export class ParticipanteModule {}
