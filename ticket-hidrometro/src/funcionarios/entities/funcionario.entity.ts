import { Ticket } from 'src/tickets/entities/ticket.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Funcionario {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  nome!: string;

  @Column()
  email!: string;

  @OneToMany(() => Ticket, ticket => ticket.funcionarioId)
  ticket?: Ticket[];  
}
