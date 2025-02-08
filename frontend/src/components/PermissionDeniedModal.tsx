import React from 'react';
import { useNavigate } from 'react-router-dom';
import { authService } from '../services/auth'; // Importar el authService
import './modal.css';

interface PermissionDeniedModalProps {
    onClose: () => void; // Prop para cerrar el modal
}

const PermissionDeniedModal: React.FC<PermissionDeniedModalProps> = ({ onClose }) => {
    const navigate = useNavigate();
    const userRole = authService.getUserRole(); // Obtener el rol del usuario

    const handleClose = () => {
        onClose();
        
        // Redirigir según el rol del usuario
        if (userRole === 'ADMINISTRADOR') {
            window.location.href = "/new";  // Administrador va a "new"
        } else {
            window.location.href = "/dashboard"; // Otros roles van a "dashboard"
        }
    };

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h2>Acceso Denegado</h2>
                <p>No tienes permisos suficientes para acceder a esta página.</p>
                <button onClick={handleClose}>Cerrar</button>
            </div>
        </div>
    );
};

export default PermissionDeniedModal;
