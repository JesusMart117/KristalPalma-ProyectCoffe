import React from 'react';
import { useNavigate } from 'react-router-dom';

const Successful: React.FC = () => {
    const navigate = useNavigate();

    const handleRedirectToLogin = () => {
        navigate('/login'); // Redirigir al login
    };

    return (
        <section className="min-h-screen flex items-center justify-center bg-[#fbcba8] font-mono p-4">
            <div className="flex flex-col bg-white shadow-2xl rounded-2xl p-8 w-full max-w-lg">
                <h2 className="text-3xl font-bold text-center mb-4">¡Registro Completo!</h2>
                <p className="text-lg text-center mb-6">Tu cuenta ha sido creada con éxito.</p>
                <p className="text-center mb-6">Vuelve al inicio para ingresar a tu cuenta.</p>
                <button
                    onClick={handleRedirectToLogin}
                    className="w-full bg-[#543821] text-white rounded-md py-2 font-semibold hover:bg-[#5a2e1d] transition-colors"
                >
                    Volver al inicio
                </button>
            </div>
        </section>
    );
};

export default Successful;
