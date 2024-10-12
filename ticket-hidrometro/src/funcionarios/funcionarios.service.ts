import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateFuncionarioDto } from './dto/create-funcionario.dto';
import { UpdateFuncionarioDto } from './dto/update-funcionario.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Funcionario } from './entities/funcionario.entity';

@Injectable()
export class FuncionariosService {

  constructor(
    @InjectRepository(Funcionario)
    private funcionariosRepository: Repository<Funcionario>
  ) {}

  async create(createFuncionarioDto: CreateFuncionarioDto) {
    const emailCadastrado = await this.funcionariosRepository.findOneBy({email: createFuncionarioDto.email})
    if (emailCadastrado) throw new Error('Email já cadastrado')
    
    const funcionario = this.funcionariosRepository.create(createFuncionarioDto)
    return this.funcionariosRepository.save(funcionario);
  }
  findAll() {
    return this.funcionariosRepository.find();
  }

  findOne(id: number) {
    return this.funcionariosRepository.findOneBy({id})
  }

  async update(id: number, updateClienteDto: UpdateFuncionarioDto) {
    const funcionario = await this.funcionariosRepository.findOneBy({id})
    if(!funcionario) throw new NotFoundException('Cliente não encontrado')

    this.funcionariosRepository.merge(funcionario, updateClienteDto)
    return await this.funcionariosRepository.save(funcionario)
  }

  async remove(id: number) {
    const funcionario = await this.funcionariosRepository.findOneBy({id})
    if(!funcionario) throw new NotFoundException('Cliente não encontrado')

    return await this.funcionariosRepository.remove(funcionario)
  }
}
