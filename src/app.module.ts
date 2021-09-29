import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FilmesModule } from './filmes/filmes.module';
import { PrismaModule } from './prisma/prisma.module';
import { GeneroModule } from './genero/genero.module';
import { ParticipanteModule } from './participante/participante.module';

@Module({
  imports: [FilmesModule, PrismaModule, GeneroModule, ParticipanteModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
