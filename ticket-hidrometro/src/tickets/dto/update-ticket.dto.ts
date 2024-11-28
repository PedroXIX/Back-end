import { PartialType } from '@nestjs/mapped-types';
import { CreateTicketDto } from './create-ticket.dto';
import { IsBoolean, IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateTicketDto extends PartialType(CreateTicketDto) {
    @IsOptional()
    @IsString()
    titulo?: string
    
    @IsOptional()
    @IsBoolean()
    status?: boolean

    @IsOptional()
    @IsString()
    categoria?: string
    
    @IsOptional()
    @IsString()
    descricao?: string
    
    @IsOptional()
    @IsNumber()
    prioridade?: number

    @IsOptional()
    @IsNumber()
    clienteId?: number

    @IsOptional()
    @IsNumber()
    funcionarioId?: number
}
