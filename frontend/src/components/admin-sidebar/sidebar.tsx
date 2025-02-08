import './sidebar.css';
import { Link } from 'react-router-dom';
import {
    FaTachometerAlt,       // Icono de Dashboard
    FaUsers,               // Icono de Equipos
    FaProjectDiagram,      // Icono de Proyectos
    FaCog                  // Icono de Ajustes
} from 'react-icons/fa'; // Importa los iconos de FontAwesome

interface NavItem {
    label: string;
    path: string;
    icon: JSX.Element; // Cambiamos el tipo de "icon" a JSX.Element
    active?: boolean;
}

export function Sidebar() {
    const navItems: NavItem[] = [
        { label: "Dashboard", path: "/new", icon: <FaTachometerAlt /> },
        { label: "Equipos", path: "/equiposAdmin", icon: <FaUsers /> },
        { label: "Proyectos", path: "/projectViewAdmin", icon: <FaProjectDiagram /> },
        { label: "Ajustes", path: "/ajustesAdmin", icon: <FaCog /> },
        { label: "Cerrar sesion", path: "/cerrar_sesion", icon: <FaCog /> }
    ];

    return (
        <nav className="sidebar">
            <div className="logo">GestCat</div>
            <div className="nav-title">Cerrar sesion</div>

            <div className="nav-items">
                {navItems.map((item) => (
                    <Link
                        key={item.label}
                        to={item.path}
                        className={`nav-item ${item.active ? "active" : ""}`}
                    >
                        <span className="nav-icon">{item.icon}</span>
                        <span className="nav-label">{item.label}</span>
                    </Link>
                ))}
            </div>
        </nav>
    );
}