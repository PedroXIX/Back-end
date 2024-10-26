import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { GerentesModule } from 'src/gerentes/gerentes.module';
import { AuthGuard } from './auth.guard';


@Module({
  imports: [
    GerentesModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET || 'secret', // A chave secreta do JWT
      signOptions: { expiresIn: '1h' }, // O token expira em 1 hora
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, AuthGuard],
  exports: [AuthService, AuthGuard],
})
export class AuthModule {}