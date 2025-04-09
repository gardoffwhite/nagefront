import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register'; // เปลี่ยนชื่อคอมโพเนนต์เป็น Register
import Gacha from './pages/Gacha';
import AdminDashboard from './pages/AdminDashboard';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />  {/* ใช้ <Register /> แทน <register /> */}
        <Route path="/gacha" element={<Gacha />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
}
