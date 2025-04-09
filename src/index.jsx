// index.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';  // ใช้สำหรับ React 18
import App from './App';  // นำเข้า App component
import './style.css';  // นำเข้าไฟล์ CSS ที่ใช้สำหรับการจัดแต่ง UI

// เรนเดอร์แอปลงใน root div
ReactDOM.createRoot(document.getElementById('root')).render(<App />);
