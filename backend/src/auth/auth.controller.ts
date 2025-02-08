import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from 'src/miembros/dto/login.dt';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { VerificarRespuestaDto } from 'src/miembros/dto/verificar-respuesta.dto';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }

    @Post('login')
    @ApiOperation({ summary: "Iniciar sesión" })
    login(@Body() loginDto: LoginDto) {
        return this.authService.login(
            loginDto.correo, 
            loginDto.contra
        );
    }

    @Post('verificar-respuesta')
    @ApiOperation({ summary: "Verificar respuesta de seguridad"})
    async verificarRespuesta(@Body() verificarRespuestaDto: VerificarRespuestaDto){
        return this.authService.verificarRespuesta(
            verificarRespuestaDto.correo,
            verificarRespuestaDto.respuesta
        );
    }
}
