import { useState } from "react";

export function Formulario({ setUser, onRegisterClick }) {
    const [nombre, setNombre] = useState("");
    const [contraseña, setContraseña] = useState("");
    const [error, setError] = useState(false);



    const handleSubmit = (e) => {
        e.preventDefault();

        if (nombre === "" || contraseña === "") {
            setError(true);
            return;
        }
        setError(false);

        setUser([nombre]);
    };

    return (
        <section className="min-h-screen flex items-center justify-center bg-background font-mono p-4">
            <div className="flex flex-col md:flex-row bg-white shadow-2xl rounded-2xl overflow-hidden max-w-lg md:max-w-4xl w-full">
                {/* Formulario */}
                <div className="flex flex-col items-center justify-center text-center p-8 md:p-12 bg-white w-full md:w-1/2">
                    <form onSubmit={handleSubmit} className="w-full">
                        <h1 className="text-3xl font-bold mb-6">Iniciar sesión</h1>
                        <div className="flex flex-col text-left mb-4">
                            <label className="text-lg mb-1">Usuario</label>
                            <input
                                type="text"
                                value={nombre}
                                onChange={e => setNombre(e.target.value)}
                                className="rounded-md p-2 border-2 border-Brown-fist outline-hidden focus:border-Brown-third"
                                placeholder="Ingresa tu usuario"
                            />
                        </div>
                        <div className="flex flex-col text-left mb-4">
                            <label className="text-lg mb-1">Contraseña</label>
                            <input
                                type="password"
                                value={contraseña}
                                onChange={e => setContraseña(e.target.value)}
                                className="rounded-md p-2 border-2  border-Brown-fist outline-hidden focus:border-Brown-third"
                                placeholder="Ingresa tu contraseña"
                            />
                        </div>
                        <div className="flex items-center mb-4">
                            <input type="checkbox" className="mr-2 bg-Brown-beige" />
                            <label className="text-sm">Recordar contraseña</label>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-Brown-fist text-white rounded-md py-2 font-semibold hover:bg-Brown-sec transition-colors"
                        >
                            Iniciar sesión
                        </button>
                        {error && <p className="text-red-500 mt-4">Todos los campos son obligatorios</p>}
                        <p className="text-sm mt-4">
                            ¿No tienes una cuenta?{"' "}
                        <a
                            href="#"
                            onClick={(e) => {
                                e.preventDefault()
                                onRegisterClick()
                            }}
                            className="text-amber-800 hover:underline"
                        >
                            Regístrate
                        </a>
                        </p>
                    </form>
                </div>

                {/* Imagen  */}
                <div className="hidden md:block md:w-1/2 bg-cover bg-center" style={{ backgroundImage: "url('src/images/Login1.jpg')" }}>
                </div>
            </div>
        </section>
    );
}
