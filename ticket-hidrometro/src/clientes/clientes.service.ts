import { Injectable } from '@nestjs/common';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cliente } from './entities/cliente.entity';

@Injectable()
export class ClientesService {

  constructor(
    @InjectRepository(Cliente)
    private clientesRepository: Repository<Cliente>
  ) {}

  async create(createClienteDto: CreateClienteDto) {
    //validação dando errado
    const emailCadastrado = await this.clientesRepository.findOneBy({email: createClienteDto.email})
    if (emailCadastrado) throw new Error('Email já cadastrado')

    const cpfCadastrado = await this.clientesRepository.findOneBy({cpf: createClienteDto.cpf})
    if (cpfCadastrado) throw new Error('CPF já cadastrado')
    
    const cliente = this.clientesRepository.create(createClienteDto)
    return this.clientesRepository.save(cliente);
  }

  findAll() {
    return this.clientesRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} cliente`;
  }

  update(id: number, updateClienteDto: UpdateClienteDto) {
    return `This action updates a #${id} cliente`;
  }

  remove(id: number) {
    return `This action removes a #${id} cliente`;
  }
}
