import { Module } from "@nestjs/common";
import { MiembrosController } from "./miembros.controller";
import { MiembrosService } from "./miembros.service";
import { PrismaModule } from "src/prisma/prisma.module"; 
import { JwtModule } from "@nestjs/jwt";

@Module({
  imports: [PrismaModule, JwtModule], 
  controllers: [MiembrosController],
  providers: [MiembrosService],
  exports: [MiembrosService],
})
export class MiembrosModule {}
