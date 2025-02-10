import { useState } from "react";
import Sidebar from "../../components/member/Sidebar";
import { FaStar } from "react-icons/fa";

function Miembros() {
  const [ratings, setRatings] = useState({});

  const equipo = {
    nombre: "Team Garden",
    miembros: [
      {
        nombre: "Melchor Ojeda",
        especialidad: "Backend (Node.js, MongoDB)",
        trabajo: "Desarrollar la estructura de la base de datos y gestionar la información del usuario.",
        imagen: "src/assets/images/melchor.jpg",
      },
      {
        nombre: "Carlos Tun",
        especialidad: "Investigación en fitoterapia",
        trabajo: "Realizar investigaciones sobre las propiedades medicinales de diversas plantas.",
        imagen: "src/assets/images/carlo.jpg",
      },
      {
        nombre: "Jesus Martínez",
        especialidad: "UI/UX Design",
        trabajo: "Diseñar la interfaz de usuario asegurándose de que sea accesible y visualmente atractiva.",
        imagen: "src/assets/images/memo.jpg",
      },
      {
        nombre: "Kristal Palma",
        especialidad: "Frontend (React.js, CSS)",
        trabajo: "Desarrollar la interfaz web de la plataforma donde los usuarios podrán explorar la base de datos.",
        imagen: "src/assets/images/kris.jpg",
      },
    ],
  };

  const handleRating = (miembro, rating) => {
    setRatings((prev) => ({ ...prev, [miembro]: rating }));
  };

  return (
    <div className="grid lg:grid-cols-4 xl:grid-cols-6 min-h-screen">
      <Sidebar />
      <main className="lg:col-span-3 xl:col-span-5 bg-gradient-to-r from-[#D8C7B6] to-[#C9B7A7] p-8 h-[100vh] overflow-y-scroll">
        <h2 className="text-3xl font-bold text-[#4B3C31] mb-6">{equipo.nombre}</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {equipo.miembros.map((miembro, idx) => (
            <div key={idx} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <img
                src={miembro.imagen}
                alt={miembro.nombre}
                className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-[#7C4A3D]"
              />
              <h4 className="text-xl font-semibold text-[#4B3C31]">{miembro.nombre}</h4>
              <p className="text-[#7C4A3D] italic">{miembro.especialidad}</p>
              <p className="text-sm text-gray-600 mt-4">{miembro.trabajo}</p>

              <div className="flex justify-center mt-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <FaStar
                    key={star}
                    size={24}
                    className={
                      star <= (ratings[miembro.nombre] || 0) ? "text-[#7C4A3D]" : "text-gray-400"
                    }
                    onClick={() => handleRating(miembro.nombre, star)}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default Miembros;
