import { Module } from '@nestjs/common';
import { GerentesService } from './gerentes.service';
import { GerentesController } from './gerentes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Gerente } from './entities/gerente.entity';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [TypeOrmModule.forFeature([Gerente]),
  JwtModule.register({
    secret: process.env.JWT_SECRET || 'secret',
    signOptions: { expiresIn: '1h' },
  }),
  ],
  controllers: [GerentesController],
  providers: [GerentesService],
  exports: [GerentesService], // Exportamos o service de usuários, isso permite que outros módulos utilizem o service
})
export class GerentesModule {}
