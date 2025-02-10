//DASHBOARS MEMBERS 
import Sidebar from "../../components/member/Sidebar";
import Header from "../../components/member/Header";


function Dashboard () {
    return (
<div className="grid lg:grid-cols-4 xl:grid-cols-6 min-h-screen">
      <Sidebar />
      <main className="lg:col-span-3 xl:col-span-5 bg-gray-100 p-8 h-[100vh] overflow-y-scroll">
        <Header/>
       
                {/* Section 2 */}
                <section className=" grid grid-cols-1 md:grid-cols-2 mt-10 gap-8">
        <div>
            <h1 className="text-2xl font-bold mb-8  ">Projecto Actual </h1>
            <div className="bg-[#603b1d] p-8 rounded-xl shadow-2xl mb-8 flex flex-col gap-8">
              <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <img
                    src="src/images/Producto.png"
                    className="w-14 h-14 object-cover rounded-full"
                  />
                  <div>
                    <h3 className="text-white font-bold  *:">AgriSync</h3>
                    <span className="bg-amber-100 text-green-950 px-2 rounded-full font-medium">
                    En Curso
                  </span>
                  </div>
                </div>
                <div>
                  <span className="bg-primary-100 py-2 px-4 rounded-full text-white">
                    Inicio: 18 DE DICIEMBRE
                  </span>
                </div>
              </div>
              <div>
                <h5 className="text-white text-lg font-bold">
                Descripción
                </h5>
                <p className="text-white">
                Sistema de riego y fertilización automatizado que se adapta a las condiciones climáticas y al nivel de humedad del suelo.
                </p>
              </div>
              <div className="bg-primary-100/10 flex flex-col md:flex-row items-center justify-between gap-4 py-8 px-4 rounded-lg">
                <div>
                <span className="text-2xl text-[#e3d9cd] font-bold mr-2">Team Garden</span>
                </div>
                <div>
                  <span className="border bg-background-latte hover:bg-background text-primary-100 py-2 px-4 rounded-full">
                    Más detalles
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h1 className="text-2xl font-bold mb-8"></h1>
            <div className="bg-background-latte p-8 rounded-xl shadow-2xl mb-8 flex flex-col gap-8">
             {/* Card 3 */}
          <div className="col-span-1 md:col-span-3 flex flex-col justify-between">
            <h1 className="text-2xl font-bold mb-8">Miembros de equipo</h1>
            <div className="bg-background-beige p-8 rounded-xl shadow-2xl">
              <div className="flex items-center gap-4 mb-8">
                <img
                  src="src/images/soft to all.png"
                  className="w-14 h-14 object-cover rounded-full"
                />
                <div>
                  <h3 className="font-bold">Héctor Villalobos</h3>
                  <p className="text-gray-500">Programador Fullstack</p>
                </div>
              </div>
              <div className="flex items-center gap-4 mb-4">
                <img
                  src="src/images/speed.png"
                  className="w-14 h-14 object-cover rounded-full"
                />
                <div>
                  <h3 className="font-bold">Ricardo Santamaría </h3>
                  <p className="text-gray-500">Diseñador de UI/UX</p>
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
            </div>
       
          </div>
        </section>
        
         {/* Section 1 */}
         
         <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 mt-10 gap-8">
          
        
          {/* Card 3 */}
          <div className="col-span-1 md:col-span-3 flex flex-col justify-between">
            <h1 className="text-2xl font-bold mb-8">Proyectos Pasados   </h1>
            <div className="bg-background-beige p-8 rounded-xl shadow-2xl">
              <div className="flex items-center gap-4 mb-8">
                <img
                  src="src/images/soft to all.png"
                  className="w-14 h-14 object-cover rounded-full"
                />
                <div>
                  <h3 className="font-bold">Jardín Inteligente</h3>
                  <p className="text-gray-500">Programador Fullstack</p>
                </div>
              </div>
              <div className="flex items-center gap-4 mb-4">
                <img
                  src="src/images/speed.png"
                  className="w-14 h-14 object-cover rounded-full"
                />
                <div>
                  <h3 className="font-bold">Ricardo Santamaría </h3>
                  <p className="text-gray-500">Diseñador de UI/UX</p>
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
        </section>
      </main>
    </div>
  );
}

export default Dashboard;