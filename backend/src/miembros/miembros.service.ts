import { Injectable } from "@nestjs/common";
import { Prisma, Miembro, RolMiembro } from "@prisma/client";
import { PrismaService } from "src/prisma/prisma.service";
import * as bcrypt from 'bcrypt';
import { CrearMiembroDto } from "./dto/crear-miembros.dto";

@Injectable()
export class MiembrosService {
    constructor(private prisma: PrismaService) { }

    async findAll() {
        return this.prisma.miembro.findMany();
    }

    async create(crearMiembroDto: CrearMiembroDto) {
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(crearMiembroDto.contra, saltRounds);

        const miembroData: Prisma.MiembroCreateInput = {
            nombre: crearMiembroDto.nombre,
            correo: crearMiembroDto.correo,
            contra: hashedPassword,
            rol: crearMiembroDto.rol ?? RolMiembro.MIEMBRO,
            pregunta: crearMiembroDto.pregunta,
            respuesta: crearMiembroDto.respuesta,
        };
        return this.prisma.miembro.create({
            data: miembroData,
        });
    }

    async findOne(id: number) {
        return this.prisma.miembro.findUnique({
            where: { id_miembro: id },
        });
    }

    async findOneByEmail(correo: string) {
        return this.prisma.miembro.findUnique({
            where: { correo: correo },
        });
    }
    
}
