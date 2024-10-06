import { IsEmail, IsNotEmpty } from "class-validator"
 
export class CreateClienteDto {
    @IsNotEmpty({message: "Nome é obrigatório"})
    nome: string
 
    @IsEmail({},{message: "E-mail inválido"})
    email: string

    @IsNotEmpty({message: "CPF é obrigatório"})
    cpf: number

    @IsNotEmpty({message: "Endereco é obrigatório"})
    endereco: string

    @IsNotEmpty({message: "Senha é obrigatório"})
    senha: string
}