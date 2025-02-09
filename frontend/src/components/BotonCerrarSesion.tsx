import { useNavigate } from 'react-router-dom';
import { LogOut } from "lucide-react";

export function BotonCerrarSesion() {
    const navigate = useNavigate();

    const handleLogout = () => {
        // Lógica para cerrar sesión, por ejemplo, eliminar el token de autenticación
        localStorage.removeItem('authToken');
        // Limpiar el historial de navegación y redirigir al usuario a la página de inicio de sesión
        navigate('/login', { replace: true });
    };

    return (
        <button
            onClick={handleLogout}
            className="flex items-center gap-2 px-6 py-2 bg-red-600 text-white font-semibold 
                   rounded-lg shadow-md hover:bg-red-700 transition duration-300 
                   focus:outline-none focus:ring-2 focus:ring-red-400"
        >
            <LogOut size={20} />
            Cerrar Sesión
        </button>

    );
}