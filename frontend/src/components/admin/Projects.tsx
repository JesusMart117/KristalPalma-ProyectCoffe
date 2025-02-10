import { useState } from "react";
import Sidebar from "../../components/admin/Sidebar";

function Proyectos() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProyecto, setSelectedProyecto] = useState(null);

  const proyectosCompletados = [
    { nombre: 'JARDÍN INTELIGENTE', descripcion: 'Sistema de riego y fertilización automatizado que se adapta a las condiciones climáticas y al nivel de humedad del suelo.', equipo: 'Team Garden' },
    { nombre: 'Sentinel Shield', descripcion: 'Sistema de gestión de seguridad que permite a empresas monitorear riesgos en tiempo real, gestionar accesos, registrar incidentes y recibir alertas de actividad sospechosa en sus instalaciones.', equipo: 'Team Sentinel' }
  ];

  const proyectosEnCurso = [
    { nombre: 'HerbologyWord', descripcion: 'Crear una plataforma educativa en línea sobre plantas medicinales, sus propiedades y usos.', equipo: 'Team Garden' },
    { nombre: 'CyberSentinel', descripcion: 'Software que analiza vulnerabilidades en redes empresariales, detecta ataques cibernéticos y ofrece soluciones en tiempo real para proteger la información sensible.', equipo: 'Team Sentinel' },
  ];

  const proyectosPendientes = [
    { nombre: 'Centinela Security', descripcion: 'Desarrollar un sistema de seguridad para hogares inteligentes con sensores y cámaras de vigilancia.', equipo: 'Team Sentinel' }
  ];

  const openModal = (proyecto) => {
    setSelectedProyecto(proyecto);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedProyecto(null);
    setModalOpen(false);
  };

  return (
    <div className="grid lg:grid-cols-4 xl:grid-cols-6 min-h-screen">
      <Sidebar />
      <main className="lg:col-span-3 xl:col-span-5 bg-gradient-to-r from-[#D8C7B6] to-[#C9B7A7] p-8 h-[100vh] overflow-y-scroll">

        {/* Renderización de proyectos */}
        {[
          { title: "Proyectos Completados", proyectos: proyectosCompletados },
          { title: "Proyectos en Curso", proyectos: proyectosEnCurso },
          { title: "Proyectos Pendientes", proyectos: proyectosPendientes }
        ].map((section, sectionIndex) => (
          <section key={sectionIndex} className="mb-8">
            <h2 className="text-3xl font-bold text-[#4B3C31] mb-6">{section.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {section.proyectos.map((proyecto, index) => (
                <div key={index} className="bg-[#F5E1D1] p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300">
                  <h3 className="text-xl font-semibold text-[#7C4A3D] mb-2">{proyecto.nombre}</h3>
                  <p className="text-sm text-[#6A4E42] mb-4">{proyecto.descripcion}</p>
                  <p className="font-medium text-[#4A352B]">Equipo responsable: {proyecto.equipo}</p>
                  <button
                    onClick={() => openModal(proyecto)}
                    className="mt-4 bg-[#7C4A3D] text-white px-4 py-2 rounded-lg shadow-md hover:bg-[#5A3228] transition-colors"
                  >
                    Agregar Recursos
                  </button>
                </div>
              ))}
            </div>
          </section>
        ))}

        {/* Modal */}
        {modalOpen && selectedProyecto && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
              <h3 className="text-2xl font-semibold text-[#4B3C31] mb-4">Agregar Recursos a {selectedProyecto.nombre}</h3>
              <form>
                <div className="mb-4">
                  <label className="block text-[#4B3C31] font-medium mb-2" htmlFor="nombre">
                    Nombre del Recurso
                  </label>
                  <input
                    type="text"
                    id="nombre"
                    className="w-full p-2 border rounded-lg"
                    placeholder="Ej: Sensor de humedad"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-[#4B3C31] font-medium mb-2" htmlFor="tipo">
                    Tipo de Recurso
                  </label>
                  <input
                    type="text"
                    id="tipo"
                    className="w-full p-2 border rounded-lg"
                    placeholder="Ej: Hardware"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-[#4B3C31] font-medium mb-2" htmlFor="asignacion">
                    Asignación
                  </label>
                  <input
                    type="text"
                    id="asignacion"
                    className="w-full p-2 border rounded-lg"
                    placeholder="Ej: Equipo de diseño"
                  />
                </div>
                <div className="flex justify-end gap-4">
                  <button
                    type="button"
                    onClick={closeModal}
                    className="bg-gray-400 text-white px-4 py-2 rounded-lg hover:bg-gray-500"
                  >
                    Cancelar
                  </button>
                  <button
                    type="submit"
                    className="bg-[#4B3C31] text-white px-4 py-2 rounded-lg hover:bg-[#32241D]"
                  >
                    Guardar
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default Proyectos;
