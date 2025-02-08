import { ApiProperty } from "@nestjs/swagger";
import { RolMiembro } from "@prisma/client";
import { IsEmail, IsEnum, IsNotEmpty, IsString } from "class-validator";

export class CrearMiembroDto {
    @ApiProperty({description: "nombre del miembro"})
    @IsString()
    @IsNotEmpty()
    nombre: string;

    @ApiProperty({description: "correo del miembro"})
    @IsEmail()
    @IsNotEmpty()
    correo: string;

    @ApiProperty({description: "contraseña del miembro"})
    @IsString()
    @IsNotEmpty()
    contra: string;

    @ApiProperty({description: "Rol por defecto: miembro"})
    @IsEnum(RolMiembro)
    rol?: RolMiembro;

    @ApiProperty({description: "Pregunta de seguridad"})
    @IsNotEmpty()
    @IsString()
    pregunta: string;
    
    @ApiProperty({description: "Respuesta de seguridad"})
    @IsNotEmpty()
    @IsString()
    respuesta: string;

}
