import { Injectable } from '@nestjs/common';
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

  update(id: number, updateTicketDto: UpdateTicketDto) {
    return `This action updates a #${id} ticket`;
  }

  remove(id: number) {
    return `This action removes a #${id} ticket`;
  }
}
