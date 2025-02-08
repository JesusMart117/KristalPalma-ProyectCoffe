import { Injectable, CanActivate, ExecutionContext, UnauthorizedException, ForbiddenException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Reflector } from '@nestjs/core';
import { Request } from 'express';
import { ROLES_KEY } from '../roles.decorator';
import { JwtPayload } from './jwt-payload.interface';  // Importa la interfaz

@Injectable()
export class JwtAuthGuard implements CanActivate {
    constructor(
        private readonly jwtService: JwtService,
        private readonly reflector: Reflector
    ) {}

    canActivate(context: ExecutionContext): boolean {
        const request = context.switchToHttp().getRequest<Request>();
        const authHeader = request.headers.authorization;

        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            throw new UnauthorizedException('Token no proporcionado');
        }

        const token = authHeader.split(' ')[1];

        try {
            const payload = this.jwtService.verify<JwtPayload>(token);  // Usa la interfaz aquí
            request.user = payload;  // Asigna el payload con la interfaz
        } catch (error) {
            throw new UnauthorizedException('Token inválido o expirado');
        }

        const roles = this.reflector.get<string[]>(ROLES_KEY, context.getHandler());
        if (!roles) {
            return true; // Si no hay roles definidos, el acceso es libre
        }

        const userRole = (request.user as JwtPayload)?.rol;  // Aquí ya podemos acceder a 'rol'

        if (!roles.includes(userRole)) {
            throw new ForbiddenException('Acceso denegado');
        }

        return true;
    }
}
