// src/App.tsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import ProjectView from "./project-view";
import Equipos from "./pages/equipos/equipos";
import Dashboard from "./pages/dashboard/dashboard";
import Ajustes from "./pages/Ajustes/ajustes";
import PrivateRoute from "./components/PrivateRoute"; // Importa PrivateRoute
import NewProject from "./pages/new-item/new-item";
import EquiposAdmin from "./pages/new-item/equipos-admin/equiposAdmin";

import AjustesAdmin from "./pages/new-item/Ajustes-admin/ajustesAdmin";
import ProjectViewAdmin from "./pages/new-item/project-admin/project-view-Admin";

const App: React.FC = () => {
  return (
    <Router>
<Routes>
    <Route path="/" element={<Login />} />
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />

    {/* Rutas protegidas para MIEMBRO */}
    <Route path="/equipos" element={<PrivateRoute element={Equipos} requiredRole="MIEMBRO" />} />
    <Route path="/project" element={<PrivateRoute element={ProjectView} requiredRole="MIEMBRO" />} />
    <Route path="/dashboard" element={<PrivateRoute element={Dashboard} requiredRole="MIEMBRO" />} />


    {/* Rutas protegidas para ADMINISTRADOR */}
    <Route path="/new" element={<PrivateRoute element={NewProject} requiredRole="ADMINISTRADOR" />} />
    <Route path="/ajustes" element={<PrivateRoute element={Ajustes} requiredRole="ADMINISTRADOR" />} />
    <Route path="/ajustesAdmin" element={<PrivateRoute element={AjustesAdmin} requiredRole="ADMINISTRADOR" />} />
    <Route path="/equiposAdmin" element={<PrivateRoute element={EquiposAdmin} requiredRole="ADMINISTRADOR" />} />
    <Route path="/projectViewAdmin" element={<PrivateRoute element={ProjectViewAdmin} requiredRole="ADMINISTRADOR" />} />
</Routes>

    </Router>
  );
};

export default App;
