import { PartialType } from '@nestjs/mapped-types';
import { CreateGerenteDto } from './create-gerente.dto';
import { IsEmail, IsOptional, IsString } from 'class-validator';

export class UpdateGerenteDto extends PartialType(CreateGerenteDto) {

    @IsOptional()
    @IsString()
    nome?: string 

    @IsOptional()
    @IsEmail()
    email?: string

    @IsOptional()
    @IsString()
    senha?: string
}
