import { Test, TestingModule } from '@nestjs/testing';
import { GenerosController } from './genero.controller';

describe('GeneroController', () => {
  let controller: GenerosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GenerosController],
    }).compile();

    controller = module.get<GenerosController>(GenerosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
