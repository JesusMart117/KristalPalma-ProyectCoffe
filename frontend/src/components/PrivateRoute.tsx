import React, { useState, useEffect } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { authService } from '../services/auth';
import PermissionDeniedModal from './PermissionDeniedModal';

interface PrivateRouteProps {
    element: React.ComponentType<any>;
    requiredRole?: string;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ element: Element, requiredRole }) => {
    const [showModal, setShowModal] = useState(false);
    const [redirectTo, setRedirectTo] = useState<string | null>(null); // Estado para redirección
    const isAuthenticated = authService.isAuthenticated();
    const userRole = authService.getUserRole();
    const location = useLocation();

    // Si no está autenticado, redirigir al login
    if (!isAuthenticated) {
        return <Navigate to="/login" state={{ from: location }} />;
    }

    // Mostrar el modal si el rol no es el adecuado
    useEffect(() => {
        if (requiredRole && userRole !== requiredRole) {
            setShowModal(true);
        }
    }, [requiredRole, userRole]);

    // Manejar el cierre del modal y redirigir según el rol
    const handleCloseModal = () => {
        setShowModal(false);

        // Si el usuario es ADMINISTRADOR, redirigir a "/new"
        if (userRole === 'ADMINISTRADOR') {
            setRedirectTo('/new');
        } else {
            setRedirectTo('/dashboard');
        }
    };

    // Si hay un destino de redirección, ejecutar Navigate
    if (redirectTo) {
        return <Navigate to={redirectTo} />;
    }

    return (
        <>
            {showModal && <PermissionDeniedModal onClose={handleCloseModal} />}
            {!showModal && <Element />}
        </>
    );
};

export default PrivateRoute;
