import React, { useState } from 'react';
import Navbar from '../components/Navbar';

export default function Gacha() {
  const [characterName, setCharacterName] = useState('');
  const [result, setResult] = useState(null);

  const handleGacha = () => {
    if (!characterName) {
      alert('กรุณากรอกชื่อตัวละคร');
      return;
    }
    // TODO: เพิ่ม API call สำหรับสุ่มไอเท็ม และหัก token
    // จำลองผลการสุ่ม
    const items = ['Sword', 'Shield', 'Potion', 'Legendary Bow'];
    const randomItem = items[Math.floor(Math.random() * items.length)];
    setResult(`${characterName} ได้รับ ${randomItem}`);
  };

  return (
    <div>
      <Navbar />
      <h2>Gacha</h2>
      <div>
        <label>ชื่อตัวละคร: </label>
        <input 
          type="text"
          value={characterName}
          onChange={(e) => setCharacterName(e.target.value)}
          placeholder="กรอกชื่อตัวละคร"
        />
      </div>
      <button onClick={handleGacha}>สุ่มไอเท็ม</button>
      {result && <p>{result}</p>}
    </div>
  );
}
