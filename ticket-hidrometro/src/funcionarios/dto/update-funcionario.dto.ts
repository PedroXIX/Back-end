import { PartialType } from '@nestjs/mapped-types';
import { CreateFuncionarioDto } from './create-funcionario.dto';
import { IsEmail, IsOptional, IsString } from 'class-validator';

export class UpdateFuncionarioDto extends PartialType(CreateFuncionarioDto) {
    @IsOptional()
    @IsString()
    nome?: string 

    @IsOptional()
    @IsEmail()
    email?: string
}
