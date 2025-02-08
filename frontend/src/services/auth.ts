// src/services/auth.ts
export const authService = {
    isAuthenticated() {
        const token = localStorage.getItem('token');
        return token !== null;
    },

    getUserRole() {
        const token = localStorage.getItem('token');
        if (!token) return null;

        try {
            const payload = JSON.parse(atob(token.split('.')[1])); // Decodifica el JWT
            console.log(payload);
            return payload?.rol; // Devuelve el rol del usuario
        } catch (error) {
            console.error("Error al decodificar el token:", error);
            return null; // Si hay un error, devuelve null
        }
    },

    logout() {
        localStorage.removeItem('token');
    },
};
