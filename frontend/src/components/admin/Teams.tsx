import { useState } from "react";
import Sidebar from "../../components/admin/Sidebar";

function Teams() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedMiembro, setSelectedMiembro] = useState(null);

  const proyectos = [
    {
      nombre: 'HerbologyWord',
      descripcion: 'Crear una plataforma educativa en línea sobre plantas medicinales, sus propiedades y usos.',
      equipo: 'Team Garden',
      miembros: [
        {
          nombre: 'Melchor Ojeda',
          especialidad: 'Backend (Node.js, MongoDB)',
          trabajo: 'Desarrollar la estructura de la base de datos y gestionar la información del usuario.',
          imagen: 'src/assets/images/melchor.jpg'
        },
        {
          nombre: 'Carlos Tun',
          especialidad: 'Investigación en fitoterapia',
          trabajo: 'Realizar investigaciones sobre las propiedades medicinales de diversas plantas.',
          imagen: 'src/assets/images/carlo.jpg'
        },
        {
          nombre: 'Jesus Martínez',
          especialidad: 'UI/UX Design',
          trabajo: 'Diseñar la interfaz de usuario asegurándose de que sea accesible y visualmente atractiva.',
          imagen: 'src/assets/images/memo.jpg'
        },
        {
          nombre: 'Kristal Palma',
          especialidad: 'Frontend (React.js, CSS)',
          trabajo: 'Desarrollar la interfaz web de la plataforma donde los usuarios podrán explorar la base de datos.',
          imagen: 'src/assets/images/kris.jpg'
        }
      ]
    },
    // Otro proyecto omitido por brevedad
  ];

  const openModal = (miembro) => {
    setSelectedMiembro(miembro);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedMiembro(null);
    setModalOpen(false);
  };

  return (
    <div className="grid lg:grid-cols-4 xl:grid-cols-6 min-h-screen">
      <Sidebar />
      <main className="lg:col-span-3 xl:col-span-5 bg-gradient-to-r from-[#D8C7B6] to-[#C9B7A7] p-8 h-[100vh] overflow-y-scroll">
        <h2 className="text-3xl font-bold text-[#4B3C31] mb-6">Equipos de Proyecto</h2>

        {proyectos.map((proyecto, index) => (
          <section key={index} className="mb-8 border-b-4 border-[#7C4A3D] pb-6">
            <h3 className="text-2xl font-semibold text-white bg-[#7C4A3D] p-2 rounded-lg mb-4 inline-block">{proyecto.nombre}</h3>
            <h3 className="text-2xl font-semibold text-[#7C4A3D] mb-4">
              {proyecto.equipo}
            </h3>

            <p className="text-[#6A4E42] mb-6">{proyecto.descripcion}</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {proyecto.miembros.map((miembro, idx) => (
                <div key={idx} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                  <img 
                    src={miembro.imagen} 
                    alt={miembro.nombre} 
                    className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-[#7C4A3D]"
                  />
                  <h4 className="text-xl font-semibold text-[#4B3C31]">{miembro.nombre}</h4>
                  <p className="text-[#7C4A3D] italic">{miembro.especialidad}</p>
                  <button 
                    onClick={() => openModal(miembro)} 
                    className="mt-4 bg-[#7C4A3D] text-white px-4 py-2 rounded-lg shadow-md hover:bg-[#5A3228] transition-colors"
                  >
                    Detalles
                  </button>
                </div>
              ))}
            </div>
          </section>
        ))}

        {/* Modal */}
        {modalOpen && selectedMiembro && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
              <h3 className="text-2xl font-semibold text-[#4B3C31] mb-4">{selectedMiembro.nombre}</h3>
              <img 
                src={selectedMiembro.imagen} 
                alt={selectedMiembro.nombre} 
                className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-[#7C4A3D]"
              />
              <p className="text-[#7C4A3D] italic">{selectedMiembro.especialidad}</p>
              <p className="text-gray-600 mt-4">{selectedMiembro.trabajo}</p>
              <button 
                onClick={closeModal} 
                className="mt-6 bg-[#4B3C31] text-white px-4 py-2 rounded-lg shadow-md hover:bg-[#32241D] transition-colors"
              >
                Cerrar
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default Teams;
