import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

/**
 * Função de inicialização da aplicação NestJS.
 * 
 * Esta função configura e inicia a aplicação, aplicando pipes globais para validação
 * e transformação de dados, garantindo que os dados de entrada estejam de acordo
 * com as expectativas definidas nas classes de DTO.
 */
async function bootstrap() {

  // Cria a instância da aplicação NestJS utilizando o módulo principal
  const app = await NestFactory.create(AppModule);

  // Aplica um pipe de validação global
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true, // Transforma os dados de entrada em classes DTO
      whitelist: true, // Remove propriedades não definidas nos DTOs
      forbidNonWhitelisted: true, // Gera erro se propriedades não permitidas forem recebidas
    })    
  );
  app.enableCors({
    origin: true,
    methods: 'GET, HEAD, PUT, PATCH, POST, DELETE, OPTIONS',
    credentials: true,
    });

  await app.listen(3000);
}
bootstrap();
