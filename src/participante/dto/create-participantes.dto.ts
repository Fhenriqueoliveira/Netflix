import { IsNotEmpty, IsOptional } from 'class-validator';

export class CreateParticipanteDto {
  @IsNotEmpty()
  nome: string;

  @IsOptional()
  imagem: string;

  @IsOptional()
  ano_nascimento: number;

  @IsNotEmpty()
  funcao: string;

  @IsOptional()
  filmeId: number;
}
