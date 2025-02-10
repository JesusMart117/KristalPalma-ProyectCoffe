// src/App.tsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Dashboard from "./pages/dashboard/dashboard";
import PrivateRoute from "./components/PrivateRoute"; // Importa PrivateRoute
import admin from "./pages/dashboard/dashadmin";
import Successful from "./pages/auth/succesfull"
import Proyectos from "./components/admin/Projects";
import Stock from "./components/admin/Stock";
import Teams from "./components/admin/Teams";
import ProyectoM from "./components/member/Proyectos";
import Miembros from "./components/member/Miembros"
import Recursos from "./components/member/Recursos"

const App: React.FC = () => {
  return (
    <Router>
<Routes>
    <Route path="/" element={<Login />} />
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
    <Route path="/successful" element={<Successful />} />

    {/* Rutas protegidas para MIEMBRO */}
    <Route path="/dashboard" element={<PrivateRoute element={Dashboard} requiredRole="MIEMBRO" />} />
    <Route path="/MisProyectos" element={<PrivateRoute element={ProyectoM} requiredRole="MIEMBRO" />} />
    <Route path="/Miembros" element={<PrivateRoute element={Miembros} requiredRole="MIEMBRO" />} />
    <Route path="/Recursos" element={<PrivateRoute element={Recursos} requiredRole="MIEMBRO" />} />


    {/* Rutas protegidas para ADMINISTRADOR */}
    <Route path="/admin" element={<PrivateRoute element={admin} requiredRole="ADMINISTRADOR" />} />
    <Route path="/proyectos" element={<PrivateRoute element={Proyectos} requiredRole="ADMINISTRADOR" />} />
    <Route path="/stock" element={<PrivateRoute element={Stock} requiredRole="ADMINISTRADOR" />} />
    <Route path="/Teams" element={<PrivateRoute element={Teams} requiredRole="ADMINISTRADOR" />} />
    

</Routes>

    </Router>
  );
};

export default App;
