import React, { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { IoIosClose } from "react-icons/io";
import { Grid2x2, Users, StickyNote, LayoutDashboard } from 'lucide-react';
import { BotonCerrarSesion } from '../BotonCerrarSesion';

const Sidebar = () => {
    const [showMenu, setShowMenu] = useState(false);
    return (
        <>
            <div className={`bg-[#452814] h-full fixed lg:static w-[80%] md:w-[40%] lg:w-full transition-all z-50 duration-300 ${showMenu ? "left-0" : "-left-full"}`}>
                {/* Perfil */}
                <div className="flex flex-col items-center justify-center p-6 gap-3 h-[30vh] relative">
                    <img
                        src="src/assets/images/Perfil.jpg"
                        className="w-20 h-20 object-cover rounded-full ring-2 ring-primary-100"
                    />
                    <h1 className="text-xl text-white font-semibold">Kris Palma</h1>
                    <p className="bg-[#844223]  py-2 px-4 rounded-full text-white font-medium">Dashboard</p>
                    {/* Puntos decorativos */}
                    <div className="absolute top-4 right-4 w-3 h-3 bg-[#dabd65]  rounded-full"></div>
                    <div className="absolute bottom-4 left-4 w-3 h-3 bg-[#dabd65]  rounded-full"></div>
                </div>
                {/* Navegación */}
                <div className="bg-primary-300 p-6 rounded-tr-[80px] h-[70vh] flex flex-col justify-between relative">
                    <nav className="flex flex-col gap-4">
                        <a href="/admin" className="flex items-center gap-3 text-white py-2 px-4 rounded-lg hover:bg-[#603b1d] transition-colors">
                            <LayoutDashboard /> Inicio
                        </a>
                        <a href="/MisProyectos" className="flex items-center gap-3 text-white py-2 px-4 rounded-lg hover:bg-[#603b1d] transition-colors">
                            <StickyNote /> Proyectos
                        </a>
                        <a href="/Teams" className="flex items-center gap-3 text-white py-2 px-4 rounded-lg hover:bg-[#603b1d] transition-colors">
                            <Users /> Equipos
                        </a>
                        <a href="/stock" className="flex items-center gap-3 text-white py-2 px-4 rounded-lg hover:bg-[#603b1d] transition-colors">
                            <Grid2x2 /> Inventario
                        </a>
                        <BotonCerrarSesion />
                    </nav>
                    {/* Puntos decorativos */}
                    <div className="absolute top-6 left-6 w-3 h-3 bg-primary-100 rounded-full"></div>
                    <div className="absolute bottom-6 right-6 w-3 h-3 bg-primary-300 rounded-full"></div>
                </div>
            </div>
            <button
                onClick={() => setShowMenu(!showMenu)}
                className="lg:hidden fixed right-4 bottom-4 text-2xl bg-[#603b1d] p-3 rounded-full text-white z-50 shadow-md hover:bg-[#452814] transition-colors"
            >
                {showMenu ? <IoIosClose /> : <IoMenu />}
            </button>
        </>
    );
};

export default Sidebar;
