// pages/Login.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    // Logic สำหรับการล็อกอิน (อาจจะเรียก API ที่ backend)
    if (username) {
      navigate('/gacha');  // เปลี่ยนไปหน้า Gacha เมื่อเข้าสู่ระบบสำเร็จ
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Enter username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
