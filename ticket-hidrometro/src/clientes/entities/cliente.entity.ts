import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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
}
