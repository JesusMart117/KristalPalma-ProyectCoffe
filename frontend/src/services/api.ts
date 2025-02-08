import axios, { AxiosError } from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3000', 
    headers: { 'Content-Type': 'application/json' },
});

const handleError = (error: unknown): string => {
    if (axios.isAxiosError(error)) {
        return error.response?.data?.message || 'Error en la autenticación';
    }
    return 'Error desconocido';
};

export const login = async (correo: string, contra: string) => {
    try {
        const response = await api.post('/auth/login', { correo, contra });
        return response.data;
    } catch (error) {
        throw handleError(error);
    }
};

export const verificarRespuesta = async (correo: string, respuesta: string) => {
    try {
        const response = await api.post('/auth/verificar-respuesta', { correo, respuesta });
        return response.data; 
    } catch (error) {
        throw handleError(error);
    }
};

export const registerUser = async (
    correo: string, 
    contra: string, 
    nombre: string, 
    pregunta: string, 
    respuesta: string
) => {
    try {
        const response = await api.post('/miembros', { correo, contra, nombre, pregunta, respuesta });
        return response.data;
    } catch (error) {
        throw handleError(error);
    }
};

export const completeProfile = async (id_miembro: number, nombre: string, pregunta: string, respuesta: string) => {
    try {
        const response = await api.put(`/auth/complete-profile/${id_miembro}`, { nombre, pregunta, respuesta });
        return response.data;
    } catch (error) {
        throw handleError(error);
    }
};
