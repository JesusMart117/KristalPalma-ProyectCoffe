import Sidebar from "../../components/admin/Sidebar";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";

function Stock() {
  // Datos de ejemplo para los recursos
  const recursos = [
    { nombre: 'Recurso A', tipo: 'HARDWARE', disponibilidad: 'Disponible', proyecto: 'Proyecto A' },
    { nombre: 'Recurso B', tipo: 'SOFTWARE', disponibilidad: 'No disponible', proyecto: 'Proyecto B' },
    { nombre: 'Recurso C', tipo: 'SOFTWARE', disponibilidad: 'Disponible', proyecto: 'Proyecto C' },
    { nombre: 'Recurso D', tipo: 'API', disponibilidad: 'En mantenimiento', proyecto: 'Proyecto D' },
  ];

  // Datos para el histograma de uso de recursos en el mes
  const usoRecursos = [
    { mes: "Enero", uso: 35 },
    { mes: "Febrero", uso: 50 },
    { mes: "Marzo", uso: 40 },
    { mes: "Abril", uso: 60 },
    { mes: "Mayo", uso: 45 },
    { mes: "Junio", uso: 70 },
    { mes: "Julio", uso: 55 },
    { mes: "Agosto", uso: 65 },
    { mes: "Septiembre", uso: 50 },
    { mes: "Octubre", uso: 75 },
    { mes: "Noviembre", uso: 60 },
    { mes: "Diciembre", uso: 80 },
  ];

  return (
    <div className="grid lg:grid-cols-4 xl:grid-cols-6 min-h-screen">
      <Sidebar />
      <main className="lg:col-span-3 xl:col-span-5 bg-gradient-to-r from-[#D8C7B6] to-[#C9B7A7] p-8 h-[100vh] overflow-y-scroll">
        
        <h2 className="text-3xl font-bold text-[#4B3C31] mb-6">Inventario de Recursos</h2>
        {/* Histograma de uso de recursos */}
        <section>
          <h3 className="text-2xl font-semibold text-[#4B3C31] mb-4">Uso total de Recursos en el Mes</h3>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={usoRecursos} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="mes" stroke="#7C4A3D" />
                <YAxis stroke="#7C4A3D" />
                <Tooltip />
                <Bar dataKey="uso" fill="#7C4A3D" barSize={50} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </section>

        {/* Tabla de Inventario */}
        <section className="mb-12">
          <div className="overflow-x-auto">
            <table className="min-w-full table-auto bg-white rounded-lg shadow-lg">
              <thead className="bg-[#7C4A3D] text-white">
                <tr>
                  <th className="px-6 py-4 text-left">Nombre</th>
                  <th className="px-6 py-4 text-left">Tipo</th>
                  <th className="px-6 py-4 text-left">Disponibilidad</th>
                  <th className="px-6 py-4 text-left">Proyecto Asociado</th>
                  <th className="px-6 py-4 text-center">Acciones</th>
                </tr>
              </thead>
              <tbody>
                {recursos.map((recurso, index) => (
                  <tr key={index} className="border-b hover:bg-[#F5E1D1]">
                    <td className="px-6 py-4 text-[#7C4A3D]">{recurso.nombre}</td>
                    <td className="px-6 py-4 text-[#6A4E42]">{recurso.tipo}</td>
                    <td className="px-6 py-4 text-[#4A352B]">{recurso.disponibilidad}</td>
                    <td className="px-6 py-4 text-[#6A4E42]">{recurso.proyecto}</td>
                    <td className="px-6 py-4 text-center">
                      <button className="bg-[#7C4A3D] text-white rounded-lg px-4 py-2 shadow-md hover:bg-[#4B3C31] transition duration-300">
                        Gestionar
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        

      </main>
    </div>
  );
}

export default Stock;
