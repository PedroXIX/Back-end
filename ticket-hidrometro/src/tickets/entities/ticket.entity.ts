import { Cliente } from "src/clientes/entities/cliente.entity";
import { Funcionario } from "src/funcionarios/entities/funcionario.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Ticket {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    titulo: string;

    @Column({default: false})
    status: boolean; //Status = Flase --> Status Aberto; Status = True --> Done

    @Column()
    categoria: string;

    @Column({ nullable: true })
    descricao: string;

    @Column()
    prioridade: number;

    @Column()
    clienteId: number;

    @Column({ nullable: true })
    funcionarioId: number;

    @ManyToOne(() => Cliente, cliente => cliente.ticket) //criando relacionamento 1:N
    cliente!: Cliente

    @ManyToOne(() => Funcionario, funcionario => funcionario.ticket) //criando relacionamento 1:N
    funcionario: Funcionario

    @Column({ type: "text", default: () => "CURRENT_TIMESTAMP" })
    dataCriacao: string;
}
