import { Injectable, NotFoundException } from '@nestjs/common';
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
    return this.clientesRepository.findOneBy({id})
  }

  async update(id: number, updateClienteDto: UpdateClienteDto) {
    const cliente = await this.clientesRepository.findOneBy({id})
    if(!cliente) throw new NotFoundException('Cliente não encontrado')

    this.clientesRepository.merge(cliente, updateClienteDto)
    return await this.clientesRepository.save(cliente)
  }

  async remove(id: number) {
    const cliente = await this.clientesRepository.findOneBy({id})
    if(!cliente) throw new NotFoundException('Cliente não encontrado')

    return await this.clientesRepository.remove(cliente)
  }

  async findOneWithTickets(id: number): Promise<Cliente>{
    const cliente = await this.clientesRepository.findOneBy({id})
    if(!cliente) throw new NotFoundException('Cliente não encontrado')

      return await this.clientesRepository.findOne({
        where: { id },
        relations: ['ticket'], // Isso carrega os tickets relacionados ao cliente
      });
  }
}
