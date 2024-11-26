import { IsNotEmpty, IsOptional } from "class-validator";

export class CreateTicketDto {
    @IsNotEmpty({ message: 'Título é obrigatório' })
    titulo: string;

    @IsNotEmpty({ message: 'Status é obrigatório' })
    status: boolean;

    @IsNotEmpty({ message: 'Categoria é obrigatório' })
    categoria: string;

    @IsNotEmpty({ message: 'Prioridade é obrigatória' })
    prioridade: number;

    @IsNotEmpty({ message: 'Cliente é obrigatório' })
    clienteId: number;

    @IsOptional()
    descricao: string;

    @IsOptional()
    funcionarioId: number;
}
