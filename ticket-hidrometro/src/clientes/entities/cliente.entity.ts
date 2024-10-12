import { Ticket } from 'src/tickets/entities/ticket.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Cliente {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  cpf!: number;

  @Column()
  nome!: string;

  @Column()
  email!: string;

  @Column()
  endereco!: string;

  @Column()
  senha!: string;  

  @OneToMany(() => Ticket, ticket => ticket.clienteId)
  ticket: Ticket[]; 
}
