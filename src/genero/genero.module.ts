import { Module } from '@nestjs/common';
import { GenerosService } from './genero.service';
import { GenerosController } from './genero.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [GenerosService],
  controllers: [GenerosController],
})
export class GeneroModule {}
