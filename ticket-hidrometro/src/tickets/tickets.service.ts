import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTicketDto } from './dto/create-ticket.dto';
import { UpdateTicketDto } from './dto/update-ticket.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Ticket } from './entities/ticket.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TicketsService {

  constructor(
    @InjectRepository(Ticket)
    private ticketsRepository: Repository<Ticket>
  ) {}

  async create(createTicketDto: CreateTicketDto) {
    const ticket = this.ticketsRepository.create(createTicketDto)
    return this.ticketsRepository.save(ticket);
  }

  findAll() {
    return this.ticketsRepository.find();
  }

  findOne(id: number) {
    return this.ticketsRepository.findOneBy({id})
  }

  //update de status e atribuição de funcionario apenas
  async update(id: number, updateTicketDto: UpdateTicketDto) {
    const ticket = await this.ticketsRepository.findOneBy({id})
    if(!ticket) throw new NotFoundException('Ticket não encontrado')

    this.ticketsRepository.merge(ticket, updateTicketDto)
    return await this.ticketsRepository.save(ticket)
  }

  async remove(id: number) {
    const ticket = await this.ticketsRepository.findOneBy({id})
    if(!ticket) throw new NotFoundException('Ticket não encontrado')

    return await this.ticketsRepository.remove(ticket)
  }
}
