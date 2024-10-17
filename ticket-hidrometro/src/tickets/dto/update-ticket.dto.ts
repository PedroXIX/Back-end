import { PartialType } from '@nestjs/mapped-types';
import { CreateTicketDto } from './create-ticket.dto';
import { IsBoolean, IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateTicketDto extends PartialType(CreateTicketDto) {
    @IsOptional()
    @IsString()
    categoria?: string
    
    @IsOptional()
    @IsString()
    descricao?: string
    
    @IsOptional()
    @IsBoolean()
    status?: boolean

    @IsOptional()
    @IsNumber()
    clienteId?: number

    @IsOptional()
    @IsNumber()
    funcionarioId?: number
}
