import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateFuncionarioDto {
  @IsNotEmpty({ message: 'Nome é obrigatório' })
  nome: string;

  @IsEmail({}, { message: 'E-mail inválido' })
  email: string;

}
