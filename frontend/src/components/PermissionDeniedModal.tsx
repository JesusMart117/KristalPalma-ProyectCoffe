import React from 'react'; 
import { useNavigate } from 'react-router-dom';
import { authService } from '../services/auth'; // Importar el authService

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
            window.location.href = "/admin";  // Administrador va a "new"
        } else {
            window.location.href = "/dashboard"; // Otros roles van a "dashboard"
        }
    };

    return (
        <div className="modal-overlay bg-[#3b2c1c] bg-opacity-70 flex justify-center items-center min-h-screen">
            <div className="modal-content bg-[#5e4b3c] text-white p-8 rounded-xl shadow-lg w-full max-w-lg">
                <h2 className="text-2xl font-bold mb-4">Acceso Denegado</h2>
                <p className="text-lg mb-6">No tienes permisos suficientes para acceder a esta página.</p>
                <button 
                    onClick={handleClose}
                    className="bg-[#603b1d] hover:bg-[#5a2e1d] text-white py-2 px-6 rounded-full font-medium transition-colors"
                >
                    Cerrar
                </button>
            </div>
        </div>
    );
};

export default PermissionDeniedModal;
