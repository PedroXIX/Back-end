import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateGerenteDto {
  @IsNotEmpty({ message: 'Nome é obrigatório' })
  nome: string;

  @IsEmail({}, { message: 'E-mail inválido' })
  email: string;

  @IsNotEmpty({ message: 'CPF é obrigatório' })
  cpf: number;

  @IsNotEmpty({ message: 'Senha é obrigatório' })
  senha: string;
}
