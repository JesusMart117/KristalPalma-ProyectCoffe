import { Body, Controller, Get, Param, Post, UseGuards } from "@nestjs/common";
import { ApiBearerAuth, ApiOperation, ApiTags } from "@nestjs/swagger";
import { MiembrosService } from "./miembros.service";
import { CrearMiembroDto } from "./dto/crear-miembros.dto";
import { JwtAuthGuard } from "src/auth/jwt/jwt-auth.guard";

@ApiTags("miembros")
@Controller("miembros")
export class MiembrosController {
    constructor(private readonly miembrosService: MiembrosService) { }

    @Get()
    @UseGuards(JwtAuthGuard)
    @ApiBearerAuth()
    @ApiOperation({ summary: "Obtener todos los miembros" })
    findAll() {
        return this.miembrosService.findAll();
    }

    @Post()
    @ApiOperation({ summary: "Crear miembro" })
    create(@Body() crearMiembroDto: CrearMiembroDto) { 
        return this.miembrosService.create(crearMiembroDto);
    }

    @Get(":id")
    @UseGuards(JwtAuthGuard)
    @ApiOperation({ summary: "Buscar un miembro" })
    findOne(@Param("id") id: string) {
        return this.miembrosService.findOne(Number(id));
    }
}
