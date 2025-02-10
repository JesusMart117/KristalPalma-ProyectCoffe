// src/App.tsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Dashboard from "./pages/dashboard/dashboard";
import PrivateRoute from "./components/PrivateRoute"; // Importa PrivateRoute
import admin from "./pages/dashboard/dashadmin";
import Successful from "./pages/auth/succesfull"

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


    {/* Rutas protegidas para ADMINISTRADOR */}
    <Route path="/admin" element={<PrivateRoute element={admin} requiredRole="ADMINISTRADOR" />} />

</Routes>

    </Router>
  );
};

export default App;
