//DASHBOARS ADMINISTRADOR 
import Sidebar from "../../components/admin/Sidebar";
import Header from "../../components/admin/Header";
import { CircleAlert } from 'lucide-react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Registramos los componentes de Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);


function Dashboard () {

  const data = {
    labels: ['Jesus', 'Melchor', 'Carlos', 'Victor'], // Nombres de los miembros del equipo
    datasets: [
      {
        label: 'Eficiencia (%)',
        data: [80, 98, 85, 45], // Porcentaje de eficiencia de cada miembro
        backgroundColor: 'rgba(75, 192, 192, 0.6)', // Color de las barras
        borderColor: 'rgba(75, 192, 192, 1)', // Color del borde de las barras
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Eficiencia de los Miembros del Equipo',
        font: {
          size: 18,
        },
      },
      legend: {
        position: 'top',
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Miembros',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Eficiencia (%)',
        },
        min: 0,
        max: 100,
      },
    },
  };

    return (
<div className="grid lg:grid-cols-4 xl:grid-cols-6 min-h-screen">
      <Sidebar />
      <main className="lg:col-span-3 xl:col-span-5 bg-gray-100 p-8 h-[100vh] overflow-y-scroll">
        <Header/>
       
    {/* Proyectos Completados */}
    <section className="grid grid-cols-1 md:grid-cols-2 mt-10 gap-8">
          <div>
          <h1 className="text-3xl font-semibold text-[#452814] mb-6 underline decoration-yellow-400">Proyecto Completado</h1>

            <div className="bg-[#603b1d] p-6 rounded-xl shadow-lg">
              <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <img src="src/assets/images/garden.jpg" className="w-40 h-40 object-cover rounded-full" />
                  <div>
                    <h3 className="text-white font-semibold text-lg">JARDÍN INTELIGENTE</h3>
                    <span className="bg-green-200 text-green-900 px-4 py-1 rounded-full font-medium">Completado</span>
                  </div>
                </div>
                <div>
                  <span className="bg-[#fbcba8] py-2 px-4 rounded-full text-[#452814]">Inicio: 18 de Diciembre</span>
                </div>
              </div>
              <p className="text-white mt-4">Sistema de riego y fertilización automatizado que se adapta a las condiciones climáticas y al nivel de humedad del suelo.</p>
              <div className="flex justify-end mt-4">
              <div className="bg-primary-100/10 flex flex-col md:flex-row items-center justify-between gap-4 py-8 px-4 rounded-lg">
                <div>
                  <span className="text-2xl text-[#e3d9cd] font-bold mr-2">Team Garden</span>
                </div>
                </div>
                <button className="bg-[#e3d9cd] hover:bg-[#fbcba8] text-[#452814] py-2 px-4 rounded-lg font-medium">Más detalles</button>
              </div>
              
            </div>
            
          </div>

          <div>
            <h1 className="text-2xl font-bold mb-8"></h1>
            <div className="bg-background-latte p-8 rounded-xl shadow-2xl mb-8 flex flex-col gap-8">
            <h1 className="text-3xl font-semibold text-[#452814] mb-6">Eficiencia de los Miembros del Equipo</h1>
          <div className="bg-[#e3d9cd] p-6 rounded-xl shadow-lg">
            <Bar data={data} options={options} />
          </div>
            </div>

          </div>
        </section>

        {/* Proyectos en curso */}
        <section className="mt-10">
          <h1 className="text-3xl font-semibold text-[#452814] mb-6">Proyectos en Curso</h1>
          <div className="bg-[#e3d9cd] p-6 rounded-xl shadow-lg">
            <div className="grid grid-cols-1 gap-4">
              {[ 
                { title: "Jardín Inteligente", status: "En Curso", team: "Team Garden", color: "bg-yellow-200 text-yellow-900" },
                { title: "Centinela Security", status: "Pendiente", team: "Team Sentinel", color: "bg-red-200 text-red-900" }
              ].map((proj, index) => (
                <div key={index} className="flex items-center justify-between bg-white p-4 rounded-lg shadow">
                  <h3 className="font-semibold text-[#452814]">{proj.title}</h3>
                  <span className={`${proj.color} py-1 px-3 rounded-full text-sm font-medium`}>{proj.status}</span>
                  <span className="font-semibold text-[#603b1d]">{proj.team}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Alertas */}
        <section className="mt-10">
          <div className="bg-[#452814] text-gray-300 p-6 rounded-xl shadow-lg flex items-center gap-6">
            <CircleAlert className="text-xl bg-red-700 rounded-full w-8 h-8 p-1" />
            <div>
              <h5 className="font-semibold text-lg text-white">ALERTA DE STOCK</h5>
              <p className="text-white">Resistencias de 220 están bajas</p>
            </div>
            <button className="bg-[#fbcba8] hover:bg-[#e3d9cd] py-2 px-6 rounded-lg text-black font-medium ml-auto">Ver más</button>
          </div>
        </section>
         {/* Section 1 */}
         <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 mt-10 gap-8">
          {/* Card */}
          <div className="p-4 bg-[#e3d9cd] rounded-xl flex flex-col justify-between gap-4 drop-shadow-2xl">
            <div className="flex items-center gap-4 bg-primary-100/10 rounded-xl p-4">
              <span className="bg-[#603b1d] text-gray-300 text-2xl font-bold p-4 rounded-xl">
                35
              </span>
              <div>
                <h3 className="font-bold">Recurso #1</h3>
                <p className="text-gray-800">Cable UTP CAT5e</p>
              </div>
            </div>
            <div className="bg-primary-100/10 rounded-xl p-4">
              <div className="flex items-center gap-4 mb-4">
                <span className="bg-[#603b1d] text-gray-300 text-2xl font-bold p-4 rounded-xl">
                  18
                </span>
                <div>
                  <h3 className="font-bold">Recurso #2</h3>
                  <p className="text-gray-800">Resistores 220</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-gray-500 text-sm">
                <span className="bg-primary-100/20 py-1 px-4 rounded-full">
                    Recursos más usados
                </span>
              </div>
            </div>
          </div>
          {/* Card 3 */}
          <div className="col-span-1 md:col-span-3 flex flex-col justify-between">
            <h1 className="text-2xl font-bold mb-8">Equipos Nuevos</h1>
            <div className="bg-[#fbcba8]-beige p-8 rounded-xl shadow-2xl">
              <div className="flex items-center gap-4 mb-8">
                <img
                  src="src/images/soft to all.png"
                  className="w-14 h-14 object-cover rounded-full"
                />
                <div>
                  <h3 className="font-bold">ZeroWaste Tech</h3>
                  <p className="text-gray-500">Desarrollo de app para conectar restaurantes y supermercados con personas o bancos de alimentos para donar comida sobrante.</p>
                </div>
              </div>
              <div className="flex items-center gap-4 mb-4">
                <img
                  src="src/images/speed.png"
                  className="w-14 h-14 object-cover rounded-full"
                />
                <div>
                  <h3 className="font-bold">BookConnect</h3>
                  <p className="text-gray-500">Desarrollar una plataforma donde usuarios puedan intercambiar libros de manera gratuita.</p>
                </div>
              </div>
              <div className="flex justify-end">
                <a
                  href="#"
                  className="hover:text-primary-100 transition-colors hover:underline"
                >
                  Ver más
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Dashboard;