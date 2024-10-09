import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Gerente {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  cpf: number;

  @Column()
  nome: string;

  @Column()
  email: string;

  @Column()
  senha: string;
}
