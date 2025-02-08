import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { MiembrosService } from 'src/miembros/miembros.service';

@Injectable()
export class AuthService {
    constructor(
        private readonly miembroService: MiembrosService,
        private readonly jwtService: JwtService,
    ) { }

    async login(correo: string, contra: string) {
        const miembro = await this.miembroService.findOneByEmail(correo);

        if (!miembro) {
            throw new UnauthorizedException('Correo electronico no registrado');
        }

        const passwordMatch = await bcrypt.compare(contra, miembro.contra);

        if (!passwordMatch) {
            throw new UnauthorizedException('Contraseña incorrecta');
        }

        return { pregunta: miembro.pregunta };
    }

    async verificarRespuesta(correo: string, respuesta: string) {
        const miembro = await this.miembroService.findOneByEmail(correo);

        if (!miembro || miembro.respuesta !== respuesta) {
            throw new UnauthorizedException('Respuesta Incorrecta');
        }

        // Crear el payload con el rol del miembro
        const payload = { 
            id_miembro: miembro.id_miembro, 
            correo: miembro.correo,
            rol: miembro.rol, // Incluye el rol aquí
        };

        // Firmar el token con el payload
        const accessToken = this.jwtService.sign(payload);

        return {
            access_token: accessToken,
        };
    }
}
