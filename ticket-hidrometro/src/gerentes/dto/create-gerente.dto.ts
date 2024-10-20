import { IsEmail, IsNotEmpty, IsStrongPassword } from 'class-validator';

export class CreateGerenteDto {
  @IsNotEmpty({ message: 'Nome é obrigatório' })
  nome: string;

  @IsEmail({}, { message: 'E-mail inválido' })
  email: string;

  @IsNotEmpty({ message: 'CPF é obrigatório' })
  cpf: number;

  @IsNotEmpty({ message: 'Senha é obrigatório' })

  @IsStrongPassword(
    { minLength: 8, minNumbers: 1, minLowercase: 1, minSymbols: 1 }, // configuração da senha forte (opcional)
    { message: 'Senha fraca' },
  )
  senha: string;
}
