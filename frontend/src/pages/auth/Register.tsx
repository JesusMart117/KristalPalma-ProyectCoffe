import React, { useState } from 'react';
import DOMPurify from 'dompurify';
import { registerUser } from '../../services/api';
import { useNavigate } from 'react-router-dom';
import './Register.css'

const Register = () => {
    const [correo, setCorreo] = useState('');
    const [contra, setContra] = useState('');
    const [nombre, setNombre] = useState('');
    const [pregunta, setPregunta] = useState('');
    const [respuesta, setRespuesta] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const securityQuestions = [
        '¿Cuál es el nombre de tu primer mascota?',
        '¿En qué ciudad naciste?',
        '¿Cuál es tu comida favorita?',
        '¿En qué escuela secundaria estudiaste?',
        '¿Cómo se llama tu mejor amigo de la infancia?'
    ];

    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault();

        const cleanedNombre = DOMPurify.sanitize(nombre);
        const cleanedRespuesta = DOMPurify.sanitize(respuesta);

        try {
            await registerUser(correo, contra, cleanedNombre, pregunta, cleanedRespuesta);
            navigate('/login');
        } catch (err) {
            setError(err as string);
        }
    };

    return (
        <div className="register-container">
            <div className="register-card">
                <h2 className="register-title">Registro</h2>

                <form onSubmit={handleRegister}>
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
                        placeholder="Contraseña máxima de 20 caracteres"
                        maxLength={20}
                        required
                    />
                    <input
                        type="text"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                        placeholder="Nombre"
                        maxLength={100}
                        required
                    />

                    <div className="security-question-container">
                        <label htmlFor="pregunta" className="question-label">

                        </label>
                        <select
                            id="pregunta"
                            value={pregunta}
                            onChange={(e) => setPregunta(e.target.value)}
                            required
                            className="security-question-select"
                        >
                            <option value="">Selecciona una pregunta...</option>
                            {securityQuestions.map((question, index) => (
                                <option key={index} value={question}>
                                    {question}
                                </option>
                            ))}
                        </select>
                    </div>

                    <input
                        type="text"
                        value={respuesta}
                        onChange={(e) => setRespuesta(e.target.value)}
                        placeholder="Respuesta de seguridad"
                        maxLength={60}
                        required
                        className="security-response-input"
                    />

                    {error && <p className="error-message">{error}</p>}
                    <button type="submit" className="register-button">
                        Registrarse
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Register;
