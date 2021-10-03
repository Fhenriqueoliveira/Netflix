import { Test, TestingModule } from '@nestjs/testing';
import { ParticipantesController } from './participante.controller';

describe('ParticipanteController', () => {
  let controller: ParticipantesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ParticipantesController],
    }).compile();

    controller = module.get<ParticipantesController>(ParticipantesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
