import React, { useState } from "react";

import { IoMenu } from "react-icons/io5";
import { IoIosClose } from "react-icons/io";
import { Grid2x2, Users, StickyNote , LayoutDashboard } from 'lucide-react';
import { BotonCerrarSesion } from '../BotonCerrarSesion'; // Importa el componente BotonCerrarSesion


const Sidebar = () => {
    const [showMenu, setShowMenu] = useState(false);
    return (
        <>

            <div className={`bg-[#452814] h-full fixed lg:static w-[80%] md:w-[40%] lg:w-full transition-all z-50 duration-300 ${showMenu ? "left-0" : "-left-full"
                }`}>
                {/*perfil */}
                <div className="flex flex-col items-center justify-center p-8 gap-2 h-[30vh]">
                    <img
                        src="src/assets/images/Perfil.jpg"
                        className="w-20 h-20 object-cover rounded-full ring-2 ring-white"
                    />
                    <h1 className="text-xl text-white font-bold">Kris Palma</h1>
                    <p className="bg-primary-100 py-2 px-4 rounded-full text-white">Dashboard</p>
                </div>
                {/* Nav */}
                <div className="bg-primary-300 p-8 rounded-tr-[120px] h-[70vh] no-scrollbar flex flex-col justify-between">
                    <nav className="flex flex-col gap-3">

                        {/* Pages */}
                        <a href="#" className="flex items-center gap-4 text-white py-2 px-4 rounded-xl hover:bg-[#603b1d] transition-colors">
                        <LayoutDashboard /> Inicio
                        </a>
                        <a href="#" className="flex items-center gap-4 text-white py-2 px-4 rounded-xl hover:bg-[#603b1d] transition-colors">
                        <StickyNote /> Proyectos
                        </a>
                        <a href="#" className="flex items-center gap-4 text-white py-2 px-4 rounded-xl hover:bg-[#603b1d] transition-colors">
                        <Users /> Equipos
                        </a>
                        <a href="#" className="flex items-center gap-4 text-white py-2 px-4 rounded-xl hover:bg-[#603b1d] transition-colors">
                        <Grid2x2 /> Inventario
                        </a>
                        <BotonCerrarSesion />
                    </nav>
                </div>

            </div>
            <button
                onClick={() => setShowMenu(!showMenu)}
                className="lg:hidden fixed right-4 bottom-4 text-2xl bg-[#603b1d] p-2.5 rounded-full text-white z-50"
            >
                {showMenu ? <IoIosClose /> : <IoMenu />}
            </button>
            
        </>
    );
};

export default Sidebar;