import { PartialType } from '@nestjs/mapped-types';
import { CreateClienteDto } from './create-cliente.dto';
import { IsEmail, IsOptional, IsString } from 'class-validator';

export class UpdateClienteDto extends PartialType(CreateClienteDto) {

    @IsOptional()
    @IsString()
    nome?: string 

    @IsOptional()
    @IsEmail()
    email?: string

    @IsOptional()
    @IsString()
    endereco?: string

    @IsOptional()
    @IsString()
    senha?: string
}
