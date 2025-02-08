import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty } from "class-validator";

export class VerificarRespuestaDto {
    @ApiProperty({ description: "Correo del usuario" })
    @IsEmail()
    correo: string;

    @ApiProperty({ description: "Respuesta de la pregunta de seguridad" })
    @IsNotEmpty()
    respuesta: string;
}
