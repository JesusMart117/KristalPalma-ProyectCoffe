import React, { useState } from 'react';
import { login, verificarRespuesta } from '../../services/api';
import { useNavigate } from 'react-router-dom';
import './../../index.css'


const Login = () => {
    const [correo, setCorreo] = useState('');
    const [contra, setContra] = useState('');
    const [respuesta, setRespuesta] = useState('');
    const [error, setError] = useState('');
    const [step, setStep] = useState(1); 
    const [pregunta, setPregunta] = useState(''); 
    const [nombre, setNombre] = useState('');
    const navigate = useNavigate();

    const handleLoginStep1 = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(''); 
        try {
            const data = await login(correo, contra);
            setPregunta(data.pregunta); 
            setNombre(data.nombre); 
            setStep(2);
        } catch (err) {
            setError(err as string); 
        }
    };

    const handleLoginStep2 = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(''); 
        try {
            const data = await verificarRespuesta(correo, respuesta);
            localStorage.setItem('token', data.access_token); 
    
            // Decodificar el token para obtener el rol del usuario
            const payload = JSON.parse(atob(data.access_token.split('.')[1]));
            const userRole = payload?.rol; 
    
            if (userRole === 'ADMINISTRADOR') {
                navigate('/admin'); // Redirigir a admin si es administrador
            } else {
                navigate('/dashboard'); // Redirigir al dashboard si es otro rol
            }
        } catch (err) {
            setError(err as string); 
        }
    };

    return (
        <section className="min-h-screen flex items-center justify-center bg-[#fbcba8] font-mono p-4">
            <div className="flex flex-col md:flex-row bg-white shadow-2xl rounded-2xl overflow-hidden max-w-lg md:max-w-4xl w-full">
                {/* Imagen */}
                <div className="hidden md:block md:w-1/2 bg-cover bg-center" style={{ backgroundImage: "url('src/assets/images/Login1.jpg')" }}>
                </div>
                
                {/* Formulario */}
                <div className="flex flex-col items-center justify-center text-center p-8 md:p-12 bg-white w-full md:w-1/2">
                    <h1 className="text-3xl font-bold mb-6">Iniciar sesión</h1>
                    {step === 1 ? (
                        <form onSubmit={handleLoginStep1} className="w-full">
                            <div className="flex flex-col text-left mb-4">
                                <label className="text-lg mb-1">Correo</label>
                                <input
                                    type="email"
                                    value={correo}
                                    onChange={(e) => setCorreo(e.target.value)}
                                    className="rounded-md p-2 border-2 border-[#543821] outline-none focus:border-Brown-third"
                                    placeholder="Correo"
                                    maxLength={150} 
                                    required
                                />
                            </div>
                            <div className="flex flex-col text-left mb-4">
                                <label className="text-lg mb-1">Contraseña</label>
                                <input
                                    type="password"
                                    value={contra}
                                    onChange={(e) => setContra(e.target.value)}
                                    className="rounded-md p-2 border-2 border-[#543821] outline-none focus:border-Brown-third"
                                    placeholder="Contraseña"
                                    maxLength={20} 
                                    required
                                />
                            </div>
                            {error && <p className="text-red-500 mt-4">{error}</p>}
                            <button type="submit" className="w-full bg-[#543821] text-white rounded-md py-2 font-semibold hover:bg-[#452814] transition-colors">
                                Continuar
                            </button>
                            <p className="text-sm mt-4">
                                ¿No tienes una cuenta? {' '}
                                <a href="./Register" className="text-amber-800 hover:underline">Regístrate</a>
                            </p>
                        </form>
                    ) : (
                        <form onSubmit={handleLoginStep2} className="w-full ">
                             <h4 className="text-lg font-semibold  ">Bienvenido {nombre}</h4>
                             <h2 className="text-[14px]  font-semibold mb-2 ">Por favor ingresa la respuesta a tu pregunta de seguridad.</h2>
                            <p className="text-gray-600 mb-4">{pregunta} {nombre}</p>
                            <input
                                type="text"
                                value={respuesta}
                                onChange={(e) => setRespuesta(e.target.value)}
                                className="mb-4 rounded-md p-2 border-2 border-[#543821] outline-none focus:border-Brown-third w-full"
                                placeholder="Respuesta de seguridad"
                                maxLength={60} 
                                required
                            />
                            {error && <p className="text-red-500 mt-4">{error}</p>}
                            <button type="submit" className=" mb-4 w-full bg-[#543821] text-white rounded-md py-2 font-semibold hover:bg-[#452814] transition-colors">
                                Ingresar
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Login;
