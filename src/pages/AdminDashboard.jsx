import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';

export default function AdminDashboard() {
  const [users, setUsers] = useState([]);
  const [itemDrops, setItemDrops] = useState([]);

  useEffect(() => {
    // TODO: ดึงข้อมูลจาก API สำหรับผู้ใช้และประวัติการสุ่มไอเท็ม
    // ตัวอย่างจำลองข้อมูล
    setUsers([
      { id: 1, username: 'UserOne', tokens: 5 },
      { id: 2, username: 'UserTwo', tokens: 3 }
    ]);
    setItemDrops([
      { id: 1, username: 'UserOne', item: 'Sword', timestamp: new Date().toLocaleString() },
      { id: 2, username: 'UserTwo', item: 'Shield', timestamp: new Date().toLocaleString() }
    ]);
  }, []);

  return (
    <div>
      <Navbar />
      <h2>Admin Dashboard</h2>
      <section>
        <h3>ผู้ใช้ทั้งหมด</h3>
        <table border="1">
          <thead>
            <tr>
              <th>รหัส</th>
              <th>ชื่อผู้ใช้</th>
              <th>Token</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.username}</td>
                <td>{user.tokens}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
      <section>
        <h3>ประวัติการสุ่มไอเท็ม (Recent Drops)</h3>
        <table border="1">
          <thead>
            <tr>
              <th>รหัส</th>
              <th>ชื่อผู้ใช้</th>
              <th>ไอเท็มที่ได้รับ</th>
              <th>เวลา</th>
            </tr>
          </thead>
          <tbody>
            {itemDrops.map(drop => (
              <tr key={drop.id}>
                <td>{drop.id}</td>
                <td>{drop.username}</td>
                <td>{drop.item}</td>
                <td>{drop.timestamp}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}
