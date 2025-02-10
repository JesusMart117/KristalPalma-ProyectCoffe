import Sidebar from "../../components/member/Sidebar";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";

function Recursos() {
  // Datos de recursos asignados por proyecto
  const proyectos = [
    {
      nombre: "Proyecto A",
      recursos: [
        { nombre: "Recurso A1", tipo: "HARDWARE", cantidad: 10 },
        { nombre: "Recurso A2", tipo: "SOFTWARE", cantidad: 5 }
      ]
    },
    {
      nombre: "Proyecto B",
      recursos: [
        { nombre: "Recurso B1", tipo: "API", cantidad: 3 },
        { nombre: "Recurso B2", tipo: "SOFTWARE", cantidad: 8 }
      ]
    },
    {
      nombre: "Proyecto C",
      recursos: [
        { nombre: "Recurso C1", tipo: "HARDWARE", cantidad: 6 },
        { nombre: "Recurso C2", tipo: "API", cantidad: 4 }
      ]
    }
  ];

  // Datos para la gráfica de uso de recursos en el mes
  const usoRecursos = [
    { mes: "Enero", uso: 35 },
    { mes: "Febrero", uso: 50 },
    { mes: "Marzo", uso: 40 },
    { mes: "Abril", uso: 60 },
    { mes: "Mayo", uso: 45 }
  ];

  return (
    <div className="grid lg:grid-cols-4 xl:grid-cols-6 min-h-screen">
      <Sidebar />
      <main className="lg:col-span-3 xl:col-span-5 bg-gradient-to-r from-[#D8C7B6] to-[#C9B7A7] p-8 h-[100vh] overflow-y-scroll">
        <h2 className="text-3xl font-bold text-[#4B3C31] mb-6">Recursos Asignados por Proyecto</h2>
        
        {/* Gráfica de uso de recursos */}
        <section className="mb-8">
          <h3 className="text-2xl font-semibold text-[#4B3C31] mb-4">Uso Total de Recursos en el Mes</h3>
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

        {/* Listado de recursos por proyecto */}
        {proyectos.map((proyecto, index) => (
          <section key={index} className="mb-8 border-b-4 border-[#7C4A3D] pb-6">
            <h3 className="text-2xl font-semibold text-white bg-[#7C4A3D] p-2 rounded-lg mb-4 inline-block">
              {proyecto.nombre}
            </h3>
            <div className="overflow-x-auto">
              <table className="min-w-full table-auto bg-white rounded-lg shadow-lg">
                <thead className="bg-[#7C4A3D] text-white">
                  <tr>
                    <th className="px-6 py-4 text-left">Nombre del Recurso</th>
                    <th className="px-6 py-4 text-left">Tipo</th>
                    <th className="px-6 py-4 text-left">Cantidad</th>
                  </tr>
                </thead>
                <tbody>
                  {proyecto.recursos.map((recurso, idx) => (
                    <tr key={idx} className="border-b hover:bg-[#F5E1D1]">
                      <td className="px-6 py-4 text-[#7C4A3D]">{recurso.nombre}</td>
                      <td className="px-6 py-4 text-[#6A4E42]">{recurso.tipo}</td>
                      <td className="px-6 py-4 text-[#4A352B]">{recurso.cantidad}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        ))}
      </main>
    </div>
  );
}

export default Recursos;
