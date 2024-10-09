import { Module } from '@nestjs/common';
import { GerentesService } from './gerentes.service';
import { GerentesController } from './gerentes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Gerente } from './entities/gerente.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Gerente])],
  controllers: [GerentesController],
  providers: [GerentesService],
})
export class GerentesModule {}
