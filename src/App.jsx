import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Gacha from './pages/Gacha';
import AdminDashboard from './pages/AdminDashboard';
import Navbar from './components/Navbar'; // Import navbar

export default function App() {
  return (
    <Router>
      <Navbar /> {/* แสดง navbar ในทุกๆ หน้า */}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/gacha" element={<Gacha />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
}
