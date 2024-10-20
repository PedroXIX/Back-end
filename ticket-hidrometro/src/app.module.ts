import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from './ormconfig';
import { ClientesModule } from './clientes/clientes.module';
import { GerentesModule } from './gerentes/gerentes.module';
import { FuncionariosModule } from './funcionarios/funcionarios.module';

import { TicketsModule } from './tickets/tickets.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }),TypeOrmModule.forRoot(config), ClientesModule, GerentesModule, FuncionariosModule, TicketsModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
