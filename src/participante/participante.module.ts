import { Module } from '@nestjs/common';
import { ParticipantesService } from './participante.service';
import { ParticipantesController } from './participante.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [ParticipantesService],
  controllers: [ParticipantesController],
})
export class ParticipanteModule {}
