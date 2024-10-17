import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateGerenteDto } from './dto/create-gerente.dto';
import { UpdateGerenteDto } from './dto/update-gerente.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Gerente } from './entities/gerente.entity';

@Injectable()
export class GerentesService {

  constructor(
    @InjectRepository(Gerente)
    private gerentesRepository: Repository<Gerente>
  ) {}

  async create(createGerenteDto: CreateGerenteDto) {
    
    const emailCadastrado = await this.gerentesRepository.findOneBy({email: createGerenteDto.email})
    if (emailCadastrado) throw new Error('Email já cadastrado')

    const cpfCadastrado = await this.gerentesRepository.findOneBy({cpf: createGerenteDto.cpf})
    if (cpfCadastrado) throw new Error('CPF já cadastrado')
    
    const gerente = this.gerentesRepository.create(createGerenteDto)
    return this.gerentesRepository.save(gerente);
  }

  findAll() {
    return this.gerentesRepository.find();
  }

  findOne(id: number) {
    return this.gerentesRepository.findOneBy({id})
  }

  async update(id: number, updateGerenteDto: UpdateGerenteDto) {
    const gerente = await this.gerentesRepository.findOneBy({id})
    if(!gerente) throw new NotFoundException('Gerente não encontrado')

    this.gerentesRepository.merge(gerente, updateGerenteDto)
    return await this.gerentesRepository.save(gerente)
  }

  async remove(id: number) {
    const gerente = await this.gerentesRepository.findOneBy({id})
    if(!gerente) throw new NotFoundException('Gerente não encontrado')

    return await this.gerentesRepository.remove(gerente)
  }

  
}
