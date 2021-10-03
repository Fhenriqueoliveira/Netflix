import { Module } from '@nestjs/common';
import { GenerosService } from './genero.service';
import { GenerosController } from './genero.controller';

@Module({
  providers: [GenerosService],
  controllers: [GenerosController],
})
export class GeneroModule {}
