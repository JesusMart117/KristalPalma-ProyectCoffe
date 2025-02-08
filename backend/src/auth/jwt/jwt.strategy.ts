import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(private readonly jwtService: JwtService) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: 'claveSecreta',
        });
    }

    async validate(playload: any) {
        return {
            id_miembro: playload.id_miembro,
            correo: playload.correo,
            rol: playload.rol,
        }
    }
}