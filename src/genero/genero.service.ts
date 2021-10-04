import { Injectable } from '@nestjs/common';
import { Genero, Prisma } from '.prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateGeneroDto } from './dto/create-genero.dto';

@Injectable()
export class GenerosService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateGeneroDto) {
    const filmes = data.filme?.map((filme) => ({
      id: filme,
    }));

    return this.prisma.genero.create({
      data: {
        ...data,
        filme: {
          connect: filmes,
        },
      },
    });
  }

  async findAll(): Promise<Genero[]> {
    return this.prisma.genero.findMany();
  }

  async findOne(generoId: number): Promise<Genero> {
    return this.prisma.genero.findUnique({
      where: {
        id: generoId,
      },
      include: {
        filme: true,
      },
    });
  }

  async update(id: number, data: CreateGeneroDto) {
    const filmes = data.filme?.map((filme) => ({
      id: filme,
    }));

    return await this.prisma.genero.update({
      data: {
        ...data,
        filme: {
          connect: filmes,
        },
      },
      where: { id },
    });
  }

  async deleteOne(where: Prisma.GeneroWhereUniqueInput): Promise<Genero> {
    return this.prisma.genero.delete({ where });
  }

  async deleteAll() {
    return this.prisma.genero.deleteMany();
  }
}
