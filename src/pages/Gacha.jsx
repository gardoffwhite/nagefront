// pages/Gacha.jsx
import React, { useState } from 'react';

export default function Gacha() {
  const [item, setItem] = useState(null);

  const handleGacha = () => {
    // Logic สำหรับสุ่มไอเท็ม
    const items = ['Sword', 'Shield', 'Potion'];
    const randomItem = items[Math.floor(Math.random() * items.length)];
    setItem(randomItem);
  };

  return (
    <div>
      <h2>Gacha</h2>
      <button onClick={handleGacha}>Spin</button>
      {item && <div>Congratulations! You got: {item}</div>}
    </div>
  );
}
