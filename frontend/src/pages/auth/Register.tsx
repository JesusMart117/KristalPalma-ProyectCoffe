import React, { useState } from 'react';
import DOMPurify from 'dompurify';
import { registerUser } from '../../services/api';
import { useNavigate } from 'react-router-dom';
import './../../index.css'

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
        <section className="min-h-screen flex items-center justify-center bg-[#fbcba8] font-mono p-4">
            <div className="flex flex-col md:flex-row bg-white shadow-2xl rounded-2xl overflow-hidden max-w-lg md:max-w-4xl w-full">
                <div className="flex flex-col items-center justify-center text-center p-8 md:p-12 bg-white w-full md:w-1/2">
                    <div className="w-full max-w-md">
                        <div className="space-y-1 mb-4">
                            <h2 className="text-2xl font-bold">Registro</h2>
                        </div>
                        <form onSubmit={handleRegister} className="space-y-4">
                            <input
                                type="email"
                                value={correo}
                                onChange={(e) => setCorreo(e.target.value)}
                                placeholder="Correo"
                                maxLength={150}
                                required
                                className="w-full rounded-md p-2 border-2 border-gray-300 outline-none focus:border-gray-500"
                            />
                            <input
                                type="password"
                                value={contra}
                                onChange={(e) => setContra(e.target.value)}
                                placeholder="Contraseña (máx. 20 caracteres)"
                                maxLength={20}
                                required
                                className="w-full rounded-md p-2 border-2 border-gray-300 outline-none focus:border-gray-500"
                            />
                            <input
                                type="text"
                                value={nombre}
                                onChange={(e) => setNombre(e.target.value)}
                                placeholder="Nombre"
                                maxLength={100}
                                required
                                className="w-full rounded-md p-2 border-2 border-gray-300 outline-none focus:border-gray-500"
                            />
                            <div className="space-y-2">
                                <label htmlFor="pregunta" className="block text-sm font-medium">
                                    Pregunta de seguridad
                                </label>
                                <select
                                    id="pregunta"
                                    value={pregunta}
                                    onChange={(e) => setPregunta(e.target.value)}
                                    required
                                    className="w-full rounded-md p-2 border-2 border-gray-300 outline-none focus:border-gray-500"
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
                                className="w-full rounded-md p-2 border-2 border-gray-300 outline-none focus:border-gray-500"
                            />
                            {error && <p className="text-sm text-red-500">{error}</p>}
                            <button
                                type="submit"
                                className="w-full bg-[#543821] text-white rounded-md py-2 font-semibold hover:bg-Brown-sec transition-colors"
                            >
                                Registrarse
                            </button>
                        </form>
                    </div>
                </div>
                <div className="hidden md:block md:w-1/2 bg-cover bg-center" style={{ backgroundImage: "url('src/assets/images/Login1.jpg')" }}>
                </div>
            </div>
        </section>
    );

};

export default Register;
