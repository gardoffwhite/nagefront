// components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav>
      <Link to="/">Login</Link>
      <Link to="/register">Register</Link>
      <Link to="/gacha">Gacha</Link>
      <Link to="/admin">Admin Dashboard</Link>
    </nav>
  );
}
