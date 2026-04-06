# AllSport - Sports & Esports Live Gateway

![AllSport](https://images.unsplash.com/photo-1541534741688-2947dfeb6f0d?auto=format&fit=crop&q=80&w=1200)

<div align="center">
  <h2>👉 <a href="https://allsport-psi.vercel.app">TRUY CẬP TRANG WEB CHÍNH THỨC (LIVE)</a> 👈</h2>
</div>

AllSport là ứng dụng web Full-stack chuyên cập nhật tin tức, lịch thi đấu, bảng xếp hạng các giải đấu Thể thao truyền thống và Thể thao điện tử (Esports).

## ⚡ Tính Năng

- **Live Match Tracking**: Cập nhật tỷ số, lịch thi đấu trực tiếp.
- **Dynamic Standings**: Bảng xếp hạng tự động phân rã theo nhóm giải đấu (League).
- **Core CMS**: Dữ liệu vận hành tự động thông qua Database trung tâm.
- **UI/UX**: Giao diện ứng dụng phong cách Glassmorphism, Micro-interactions chuẩn hiện đại.

## 💻 Công Nghệ
- **Client**: React.js / Vite
- **Server**: Node.js / Express.js
- **Database**: MongoDB / Mongoose

## 🚀 Cài Đặt (Local Development)

### Yêu cầu
- Node.js (v18+)
- MongoDB Community Server (chạy tại port mặc định `27017`)

### Khởi chạy môi trường

**1. Khởi tạo Backend & Database**
```bash
cd backend
npm install
node seed.js      # Nạp dữ liệu mẫu
npm run dev       # API chạy tại http://localhost:5000
```

**2. Khởi chạy Client**
```bash
cd frontend
npm install
npm run dev       # App chạy tại http://localhost:5173
```
