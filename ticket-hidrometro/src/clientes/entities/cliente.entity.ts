import { Ticket } from 'src/tickets/entities/ticket.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

/**
 * Representa a entidade Cliente no sistema.
 * 
 * A classe 'Cliente' definirá a estrutura e os relacionamentos da entidade cliente
 * com a tabela no banco de dados. Um cliente pode ter múltiplos tickets associados a ele.
 */
@Entity()
export class Cliente {

  /**
   * Identificador único do cliente.
   * Este campo é gerado automaticamente pelo banco de dados.
   */
  @PrimaryGeneratedColumn()
  id!: number;

  /**
   * CPF do cliente.
   * Deve ser um número que representa o Cadastro de Pessoa Física.
   */
  @Column()
  cpf!: number;

  /**
   * Nome do cliente.
   * Este campo deve conter o nome completo do cliente.
   */
  @Column()
  nome!: string;

  /**
   * Endereço de e-mail do cliente.
   * Este campo deve ser único e válido, representando a comunicação com o cliente.
   */
  @Column()
  email!: string;

  /**
   * Endereço residencial do cliente.
   * Este campo deve conter a localização do cliente para fins de correspondência.
   */
  @Column()
  endereco!: string;

  /**
   * Senha do cliente.
   * Este campo deve ser armazenado de forma segura (por exemplo, utilizando hashing).
   */
  @Column()
  senha!: string;  
  /**
   * Relacionamento um-para-muitos com a entidade Ticket.
   * Um cliente pode ter múltiplos tickets associados.
   */
  @OneToMany(() => Ticket, ticket => ticket.cliente)
  ticket: Ticket[]
}
