import { useNavigate } from 'react-router-dom';

export function BotonCerrarSesion() {
    const navigate = useNavigate();

    const handleLogout = () => {
        // Lógica para cerrar sesión, por ejemplo, eliminar el token de autenticación
        localStorage.removeItem('authToken');
        // Limpiar el historial de navegación y redirigir al usuario a la página de inicio de sesión
        navigate('/login', { replace: true });
    };

    return (
        <button onClick={handleLogout} className="btn btn-danger">
            Cerrar Sesión
        </button>
    );
}