import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {DocumentBuilder, SwaggerModule} from '@nestjs/swagger'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: 'http://localhost:5173', // URL del frontend
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, // Permitir cookies o credenciales
  }); 
  
  /* Esto es para usar Swagger */
  const config = new DocumentBuilder()
    .setTitle('Api de mi proyecto')
    .setDescription('Api para visualizar la gestion de usuarios')
    .setVersion('1.0')
    .addTag('miembros')
    .build();
  const document = SwaggerModule.createDocument(app, config); 
  SwaggerModule.setup('api', app, document);

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
