// Icons
import { RiSearch2Line } from "react-icons/ri";

const Header = () => {
  return (
    <header className="flex flex-col md:flex-row items-center justify-between gap-4 p-4 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl  md:text-3xl font-bold text-[#603b1d]">
        Bienvenido, <span className="text-primary-500">Administrador</span>
      </h1>
      <form className="w-full md:w-auto">
        <div className="relative">
          <RiSearch2Line className="absolute top-1/2 -translate-y-1/2 left-3 text-gray-500" size={20} />
          <input
            type="text"
            className="bg-gray-100 border border-gray-300 outline-none py-2 pl-10 pr-4 rounded-lg w-full md:w-64 focus:ring-2 focus:ring-primary-500"
            placeholder="Buscar..."
          />
        </div>
      </form>
    </header>
  );
};

export default Header;
