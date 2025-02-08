
import { Header } from "../../../components/admin-header/header"
import { Sidebar } from "../../../components/admin-sidebar/sidebar"
import "./ajustes.css"; // Importa el archivo CSS

export default function AjustesAdmin() {
    return (
        <div className="ajustes-container">
            <Sidebar />
            <div className="main-content">
                <Header title="Ajustes" />
                <div className="ajustes-content">
                    <div className="ajustes-grid">
                        {/* Sección de Configuración General */}
                        <div className="ajustes-section">
                            <h2>Configuración General</h2>
                            <div className="ajustes-item">
                                <label>Nombre de la organización</label>
                                <input type="text" placeholder="Ingresa el nombre" />
                            </div>
                            <div className="ajustes-item">
                                <label>Idioma</label>
                                <select>
                                    <option value="es">Español</option>
                                    <option value="en">Inglés</option>
                                </select>
                            </div>
                        </div>

                        {/* Sección de Seguridad */}
                        <div className="ajustes-section">
                            <h2>Seguridad</h2>
                            <div className="ajustes-item">
                                <label>Cambiar contraseña</label>
                                <input type="password" placeholder="Nueva contraseña" />
                            </div>
                            <div className="ajustes-item">
                                <label>Confirmar contraseña</label>
                                <input type="password" placeholder="Confirmar contraseña" />
                            </div>
                        </div>

                        {/* Sección de Notificaciones */}
                        <div className="ajustes-section">
                            <h2>Notificaciones</h2>
                            <div className="ajustes-item">
                                <label>Recibir notificaciones por correo</label>
                                <input type="checkbox" />
                            </div>
                            <div className="ajustes-item">
                                <label>Recibir notificaciones en la app</label>
                                <input type="checkbox" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}