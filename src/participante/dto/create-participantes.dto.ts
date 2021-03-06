import { IsNotEmpty, IsOptional } from 'class-validator';

export class CreateParticipanteDto {
  @IsNotEmpty()
  nome: string;

  @IsOptional()
  imagem: string;

  @IsOptional()
  ano_nascimento: number;
  @IsNotEmpty()
  staff: boolean;

  @IsNotEmpty()
  ator: boolean;

  @IsOptional()
  filmes: number[];
}
