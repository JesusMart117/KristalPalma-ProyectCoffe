export interface JwtPayload {
    id_miembro: number;
    correo: string;
    rol: string; 
    iat: number;
    exp: number;
}
