import { HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { GerentesService } from 'src/gerentes/gerentes.service';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private gerentesService: GerentesService,
  ) {}

  async validateGerente(email: string, senha: string) {
    // Buscamos o usuário pelo e-mail
    const gerente = await this.gerentesService.findOneByEmail(email);
    // Verificamos se o usuário existe e se a senha está correta
    if (gerente && bcrypt.compareSync(senha, gerente.senha)) {
      // Se o usuário existe e a senha está correta retornamos o usuário
      return gerente;
    }
    // Caso contrário retornamos null
    return null;
  }

  async login(gerente: { email: string; id: number }) {
    // Geramos o token JWT
    const payload = { email: gerente.email, id: gerente.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}