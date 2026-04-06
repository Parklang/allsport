import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar glass-panel flex justify-between align-center">
      <div className="nav-logo">
        <Link to="/">
          <h2 className="text-gradient">AllSport</h2>
        </Link>
      </div>
      <ul className="nav-links flex align-center">
        <li><Link to="/">Trang Chủ</Link></li>
        <li><Link to="/schedule">Lịch Thi Đấu</Link></li>
        <li><Link to="/standings">Bảng Xếp Hạng</Link></li>
        <li><Link to="/news">Tin Nóng</Link></li>
      </ul>
      <button className="btn">Đăng Nhập</button>
    </nav>
  );
};

export default Navbar;
