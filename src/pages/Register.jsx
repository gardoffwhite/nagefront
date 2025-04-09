// pages/Register.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Register() {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  const handleRegister = () => {
    // Logic สำหรับการลงทะเบียน (อาจจะเรียก API ที่ backend)
    if (username) {
      navigate('/gacha');  // เปลี่ยนไปหน้า Gacha เมื่อสมัครสมาชิกสำเร็จ
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <input
        type="text"
        placeholder="Enter username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={handleRegister}>Register</button>
    </div>
  );
}
