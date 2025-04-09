import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav style={{ marginBottom: '20px', borderBottom: '1px solid #ccc', paddingBottom: '10px' }}>
      <Link to="/" style={{ marginRight: '10px' }}>Login</Link>
      <Link to="/register" style={{ marginRight: '10px' }}>Register</Link>
      <Link to="/gacha" style={{ marginRight: '10px' }}>Gacha</Link>
      <Link to="/admin" style={{ marginRight: '10px' }}>Admin Dashboard</Link>
    </nav>
  );
}

