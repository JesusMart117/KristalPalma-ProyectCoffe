import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, MinLength } from "class-validator";

export class LoginDto {
    @ApiProperty({description: "Correo del miembro" })
    @IsEmail()
    correo: string;

    @ApiProperty({description: "Contraseña del miembro" })
    @IsNotEmpty()
    @MinLength(6)
    contra: string;
}
