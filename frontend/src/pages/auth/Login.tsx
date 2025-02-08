import React, { useState } from 'react';
import { login, verificarRespuesta } from '../../services/api';
import { useNavigate } from 'react-router-dom';
import './login.css';
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
                navigate('/new'); // Redirigir a NewProject si es administrador
            } else {
                navigate('/dashboard'); // Redirigir al dashboard si es otro rol
            }
        } catch (err) {
            setError(err as string); 
        }
    };

    return (
        <div className="login-container">
            <div className="left-side"></div>
            <div className="login-form-container">
                <h1>Iniciar sesión</h1>

                {step === 1 ? (
                    <form onSubmit={handleLoginStep1}>
                        <input
                            type="email"
                            value={correo}
                            onChange={(e) => setCorreo(e.target.value)}
                            placeholder="Correo"
                            maxLength={150} 
                            required
                        />
                        <input
                            type="password"
                            value={contra}
                            onChange={(e) => setContra(e.target.value)}
                            placeholder="Contraseña"
                            maxLength={20} 
                            required
                        />
                        {error && <p className="error-message">{error}</p>}
                        <button type="submit">Continuar</button>
                        <h4 ><a href="./Register">¿No tienes cuenta? Registrate</a></h4>
                    </form>

                ) : (
                    <form onSubmit={handleLoginStep2}> 
                        <h4>Bienvenido, {nombre} por favor ingresa la respuesta a tu pregunta de seguridad.</h4>
                        <p>{pregunta} {nombre}</p> 
                        <input
                            type="text"
                            value={respuesta}
                            onChange={(e) => setRespuesta(e.target.value)}
                            placeholder="Respuesta de seguridad"
                            maxLength={60} 
                            required
                        />
                        {error && <p className="error-message">{error}</p>}
                        <button type="submit">Ingresar</button>
                    </form>
                )}
            </div>
        </div>
    );
};

export default Login;
