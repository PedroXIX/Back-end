import { IsNotEmpty, IsOptional } from "class-validator";

export class CreateTicketDto {
    @IsNotEmpty({ message: 'Status é obrigatório' })
    status: boolean;

    @IsNotEmpty({ message: 'Categoria é obrigatório' })
    categoria: string;

    @IsNotEmpty({ message: 'Cliente é obrigatório' })
    clienteId: number;

    @IsOptional()
    descricao: string;

    @IsOptional()
    funcionarioId: number;


}
