import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Funcionario {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column()
  email: string;

}
