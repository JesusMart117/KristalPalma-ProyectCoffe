import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';
import { MiembrosService } from './miembros/miembros.service';
import { PrismaModule } from './prisma/prisma.module';
import { MiembrosModule } from './miembros/miembros.module';
import { AuthModule } from './auth/auth.module';


@Module({
  imports: [PrismaModule, MiembrosModule, AuthModule],
  controllers: [AppController],
  providers: [AppService, MiembrosService, PrismaService],
})
export class AppModule {}
